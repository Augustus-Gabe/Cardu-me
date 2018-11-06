import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styleUrls: ['./torta.component.scss']
})
export class TortaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: 'black'
          }
        }
      }
    },
    series: [{
      name: 'Brands',
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Sogou Explorer',
        y: 1.64
      }, {
        name: 'Opera',
        y: 1.6
      }, {
        name: 'QQ',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }]
  });

}
