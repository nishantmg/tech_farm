import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from './market/market.component';

const marketRoutes : Routes = [{
    path:'market',
    component : MarketComponent
}
];
@NgModule({
    imports: [
        RouterModule.forChild(marketRoutes)
    ],
    exports: [RouterModule]
})

export class MakretRoutingModule{};