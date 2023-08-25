import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Erc20Component } from './erc20/erc20.component';
import { LotteryComponent } from './lottery/lottery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Erc20Component,
    LotteryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
