import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostEstimationComponent } from './cost-estimation/cost-estimation.component';
import { CostEstimationRoutingModule } from './cost-estimation-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CostEstimationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    CostEstimationRoutingModule
  ]
})
export class CostEstimationModule { }
