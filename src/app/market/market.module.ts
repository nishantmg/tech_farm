import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MakretRoutingModule } from './market-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MarketComponent } from './market/market.component';



@NgModule({
  declarations: [
    MarketComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MakretRoutingModule,
    SharedModule
  ]
})
export class MarketModule { }
