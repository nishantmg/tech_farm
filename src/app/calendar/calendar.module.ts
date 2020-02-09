import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {RoundProgressModule} from 'angular-svg-round-progressbar';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule,
    IonicModule,
    Ng2GoogleChartsModule,
    RoundProgressModule
  ]
})
export class CalendarModule { }
