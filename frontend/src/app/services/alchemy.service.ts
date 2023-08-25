import { Injectable } from '@angular/core';
import { Alchemy, Network } from 'alchemy-sdk';

@Injectable({
  providedIn: 'root',
})
export class AlchemyService {
  alchemy: Alchemy;

  constructor() {
    const settings = {
      apiKey: 'YOUR_API_KEY',
      network: Network.ARB_GOERLI,
    };
    this.alchemy = new Alchemy(settings);
  }
}
