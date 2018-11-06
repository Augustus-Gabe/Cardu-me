import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chart = new Chart({
 
    chart: { 
        height: '250'
      },
    title: {
      text: 'This chart is 16:9 ratio'
    },

    subtitle: {
      text: 'Try resizing the frame to see both the width and height update'
    },

    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      type: 'column'
    }],

    responsive: {
      rules: [{
          condition: {
              maxWidth: 500,
              maxHeight:250
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: null
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }


  });

}
