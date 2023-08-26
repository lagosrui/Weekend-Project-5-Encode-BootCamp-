import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erc20Component } from './erc20/erc20.component';

const routes: Routes = [
  { path: 'erc-20', component: Erc20Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
