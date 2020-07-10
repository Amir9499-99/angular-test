import { Component, ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations
} from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [0, 600, 800, 1200, 1800, 1900, 2200, 2220, 2300],
        },
      ],
      chart: {
        height: 160,
        width: 770,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
  
      },
      stroke: {
        show: true,
        curve: 'smooth',
       
      },
      grid: {
        row: {
          colors: ['#424242'], // takes an array which will be repeated on columns
          opacity: 10,
        },
        column: {
          colors: ['#424242'],
          opacity: 2,
        },
      },
      xaxis: {
        categories: [
          '00:00',
          '03:00',
          '06:00',
          '09:00',
          '12:00',
          '15:00',
          '18:00',
          '21:00',
          '24:00',
        ],
         labels: {
          style: {
            colors: "#909090"
          }
        }
        
      },
      yaxis: {
        labels: {
          style: {
            colors: "#909090"
          }
        },
        axisBorder: {
          show: true,
          color: '#909090',
          offsetX: 0,
          offsetY: 0
      },
      axisTicks: {
          show: true,
          color: '#909090',
          width: 6,
          offsetX: 2,
          offsetY: 0
      },
      }
      
        
    }
}
  ngOnInit(): void {
  }
}
