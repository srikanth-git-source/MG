import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};


@Component({
  selector: 'app-astor-paq-audit',
  templateUrl: './astor-paq-audit.component.html',
  styleUrls: ['./astor-paq-audit.component.scss']
})
export class AstorPaqAuditComponent implements OnInit {

  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Monthly",
          data: [95, 55, 80]
        },
        {
          name: "Weekly",

          data: [53, 32, 70]
        },
        {
          name: "Target",

          data: [62, 21, 60]
        },
        // {
        //   name: "serie3",

        //   data: [53, 32, 33]
        // },
        // {
        //   name: "serie3",

        //   data: [53, 32, 33]
        // }
      ],
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: false,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ["General Agency",  "Paint", "Body", "SQE"]
      }
    };

    
  }
  MonthSelected = 11;
  Yearselected = 0;
  ngOnInit() {
  }


  items = [
    {issues:"RHR BSO Ding	",average:"660"}, 
    {issues:"LHR Door outer scratch	",average:"520"}, 
    {issues:"Rear bumper contamination	",average:"360"}, 
    
    ];


}
