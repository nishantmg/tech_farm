import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'consumption',
    loadChildren: './consumption/consumption.module#ConsumptionModule'
  },
  { path: 'animals',
    loadChildren: './animals/animals.module#AnimalsModule'
  },
  { path: 'production',
    loadChildren: './production/production.module#ProductionModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
