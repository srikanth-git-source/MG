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
  selector: 'app-hector-crating',
  templateUrl: './hector-crating.component.html',
  styleUrls: ['./hector-crating.component.scss']
})
export class HectorCratingComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Monthly Avg Defect Rate",
          data: [125, 140]
        },
        {
          name: "Weekly Avg Defect Rate",
          data: [105, 95]
        },
        {
          name: "Target Limit",

          data: [90, 51]
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
        categories: ["Interior",  "Exterior"]
      }
    };

    
  }
  MonthSelected = 11;
  Yearselected = 0;
  filterToggle: boolean;
  ngOnInit() {
  }


  items = [
    {checkpoints:"1A - HOOD TO FRONT GRILL- GAP( a )"}, 
    {checkpoints:"1A - HOOD TO FRONT GRILL - GAP( b )"}, 
    {checkpoints:"1 - TAILGATE TRIM TO DECORATIVE PANEL - FLUSH"}, 
    {checkpoints:"TAILGATE TRIM to TAILGATE GLASS BLACK EDGE - PARALLELISM"}, 
    {checkpoints:"6 - TAILGATE TRIM to TAILGATE GLASS BLACK EDGE - DIST"},
    
    ];

}
