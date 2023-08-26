import { Component, effect } from '@angular/core';
import { MetamaskService } from './services/metamask.service';
import { AlchemyService } from './services/alchemy.service';
import { TokenBalance } from 'alchemy-sdk';
import { FormControl, Validators } from '@angular/forms';
import { ethers, Contract } from 'ethers';
import { LotteryToken__factory } from 'src/assets/contracts';

declare global {
  interface Window {
    ethereum: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  provider = new ethers.providers.Web3Provider(window.ethereum, "any");  /// ver na nova versão
  signer = this.provider.getSigner();
  title = 'Weekend Project 5 - Encode';
  currentChainId = this.metamaskService.currentChainId;
  currentAccount = this.metamaskService.currentAccount;
  balance = this.metamaskService.balance;
  hasMetamask;
  tokenBalances: TokenBalance[] = [];
  message = new FormControl('', Validators.required);
  signatures: string[] = [];
  contract = LotteryToken__factory.connect("0x47F57A286Db67a420e83474E7daE22BCdd84eDB6", this.signer);

  constructor(
    private metamaskService: MetamaskService,
    private alchemyService: AlchemyService
  ) {
    console.log(this.signer)
    console.log(this.contract)
    this.hasMetamask = metamaskService.checkMetamaskAvailability();
    if (this.hasMetamask) {
      metamaskService.retrieveConnection();
    }
    effect(async () => {
      if (this.currentAccount()) {
        this.tokenBalances = await this.alchemyService.getTokenBalances(
          this.currentAccount()
        );
      }
    });

    console.log(this.provider)
    console.log(this.signer)
    console.log(this.contract)
    console.log(this.contract.name())

  }

  connectWallet() {
    this.metamaskService.connectWallet();
  }

  getName() {
    return this.contract.name()
  }

  signMessage() {
    const message = this.message.value!;
    this.metamaskService.signer?.signMessage(message).then((signature) => {
      this.signatures.push(signature);
    });
  }

}
