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
  selector: 'app-hector-paint-audit',
  templateUrl: './hector-paint-audit.component.html',
  styleUrls: ['./hector-paint-audit.component.scss']
})
export class HectorPaintAuditComponent implements OnInit {
  filterToggle:boolean = false;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Monthly",
          data: [45, 35, 60]
        },
        {
          name: "Weekly",

          data: [33, 38, 40]
        },
        {
          name: "Target",

          data: [42, 39, 60]
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
    {issues:"Thin Paint	",average:"560"}, 
    {issues:"Tool / Scuff Marks	",average:"420"}, 
    {issues:"Scratch",average:"260"}, 
    
    ];

}
