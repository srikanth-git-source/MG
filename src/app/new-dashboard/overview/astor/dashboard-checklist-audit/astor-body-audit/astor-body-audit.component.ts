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
  selector: 'app-astor-body-audit',
  templateUrl: './astor-body-audit.component.html',
  styleUrls: ['./astor-body-audit.component.scss']
})
export class AstorBodyAuditComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Monthly",
          data: [35, 45, 90]
        },
        {
          name: "Weekly",

          data: [23, 32, 50]
        },
        {
          name: "Target",

          data: [52, 29, 30]
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
    {issues:"LHR Door outer scratch	",average:"460"}, 
    {issues:"Roof rail - Sink marks / Waviness	",average:"320"}, 
    {issues:"Rear bumper contamination	",average:"260"}, 
    
    ];

}
