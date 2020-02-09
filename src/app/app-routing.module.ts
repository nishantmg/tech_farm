import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'consumption',
    loadChildren: './consumption/consumption.module#ConsumptionModule'
  },
  { path: 'animals',
    loadChildren: './animals/animals.module#AnimalsModule'
  },
  { path: 'production',
    loadChildren: './production/production.module#ProductionModule'
  },
  { path: 'cost-estimation',
    loadChildren: './cost-estimation/cost-estimation.module#CostEstimationModule'
  },
  { path: 'market',
    loadChildren: './market/market.module#MarketModule'
  },
  { path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarModule'
  },
  { path: 'account',
    loadChildren: './account/account.module#AccountModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
