import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LotteryComponent } from './lottery/lottery.component';
import { Erc20Component } from './erc20/erc20.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lottery', component: LotteryComponent },
  { path: 'erc-20', component: Erc20Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
