import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-linha',
  templateUrl: './linha.component.html',
  styleUrls: ['./linha.component.scss']
})
export class LinhaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chart = new Chart({
    chart: {
      type: 'line',
      height: '250'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
