import { Component } from '@angular/core';
import { ethers } from "ethers";

@Component({
  selector: 'app-erc20',
  templateUrl: './erc20.component.html',
  styleUrls: ['./erc20.component.css']
})

export class Erc20Component {
  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  signer = this.provider.getSigner();
  
  name() {
    console.log(this.signer);
  }
}
