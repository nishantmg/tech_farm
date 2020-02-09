import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfarm',
  templateUrl: './myfarm.component.html',
  styleUrls: ['./myfarm.component.scss'],
})
export class MyfarmComponent {

  constructor() { }

  ngOnInit() {
    this.useAngularLibrary();
  }

  pieChartData;
  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Languages', 'number'],
        ['Poultry',     20],
        ['Millet',      30],
        ['Wheat',  50]
      ],
      options: {
      'title': '',
      'width': 330,
      'height': 500
      }
    };
  }

}
