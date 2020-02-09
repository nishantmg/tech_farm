import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
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
        ['Maize', 30],
        ['Millet', 25],
        ['Rice', 30],
        ['Wheat', 15]
      ],
      options: {
      'title': '',
      'width': 330,
      'height': 500
      }
    };
    console.log("hello")
  }

}
