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
  selector: 'app-astor',
  templateUrl: './astor.component.html',
  styleUrls: ['./astor.component.scss']
})
export class AstorComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "weekly",
          data: [44, 55, 41]
        },
        {
          name: "monthly",

          data: [53, 32, 33]
        },
        {
          name: "Target",

          data: [53, 32, 33]
        },
        {
          name: "serie3",

          data: [53, 32, 33]
        },
        {
          name: "serie3",

          data: [53, 32, 33]
        }
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
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ["General Agency",  "Paint", "Body"]
      }
    };

    
  }

  ngOnInit() {
  }


  items = [
    {issues:"One",average:"Vehicle"}, 
    {issues:"Two",average:"Vehicle1"}, 
    {issues:"Three",average:"Vehicle2"}, 
    
    ];

}
