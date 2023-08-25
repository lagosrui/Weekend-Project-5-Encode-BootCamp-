import { Component } from '@angular/core';
import './app.component.scss';
import { MetamaskService } from './services/metamask.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'w3fs-frontend';
  currentChainId$ = this.metamaskService.currentChainId$;
  currentAccount$ = this.metamaskService.currentAccount$;
  balance$ = this.metamaskService.balance$;
  hasMetamask;

  constructor(private metamaskService: MetamaskService) {
    this.hasMetamask = metamaskService.checkMetamaskAvailability();
    if (this.hasMetamask) {
      metamaskService.retrieveConnection();
    }
  }

  connectWallet() {
    this.metamaskService.connectWallet();
  }
}
