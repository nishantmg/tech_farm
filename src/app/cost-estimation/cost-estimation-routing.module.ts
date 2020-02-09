import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CostEstimationComponent } from './cost-estimation/cost-estimation.component';

const costEstimationRoutes : Routes = [{
    path:'cost-estimation',
    component : CostEstimationComponent
}
];
@NgModule({
    imports: [
        RouterModule.forChild(costEstimationRoutes)
    ],
    exports: [RouterModule]
})

export class CostEstimationRoutingModule{};