import { Component, OnInit } from '@angular/core';
import { Consumption } from 'src/app/models/consumption';
import { ConsumptionService } from 'src/app/services/consumption.service';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
})
export class ConsumptionComponent implements OnInit {
  consumptions : Consumption []=[];

  constructor(
    private consumptionService : ConsumptionService

  ) { }

  ngOnInit() {
    this.consumptionService.getConsumptions().subscribe(
      (consumptions)=>{
        this.consumptions = consumptions
        console.log(consumptions);
      }
    )
  }
  
}
