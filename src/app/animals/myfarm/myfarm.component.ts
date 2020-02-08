import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

declare var google:any;

@Component({
  selector: 'app-myfarm',
  templateUrl: './myfarm.component.html',
  styleUrls: ['./myfarm.component.scss'],
})
export class MyfarmComponent {

  constructor(
    public platform:Platform
  ) {
    this.platform.ready().then(()=>{
      google.charts.load('current',{'packages':['coreheart']});
    })
   }

  ngOnInit() {
    this.DrawPieChart();
  }

  DrawPieChart(){
    var data = google.visualization.arrayToDataTable([
      ['vehicle status', 'count'],
      ['In motion',10],
      ['Idling',5],
      ['Stopped',7]
    ]);
    var options = {
      title:'Vehicle count according to their status',
      is3D:true
    }
    var chart = new google.visualization.PieChart(document.getElementById('div_pie'));
    chart.draw(data,options);
  }

}
