import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend:ApexLegend;
};


@Component({
  selector: 'app-zsev-qa-body-audit',
  templateUrl: './zsev-qa-body-audit.component.html',
  styleUrls: ['./zsev-qa-body-audit.component.scss']
})
export class ZsevQaBodyAuditComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  filterToggle: boolean;
  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160,440, 505, 414, 671, 227, 413, 201, 352,369]
        },
        {
          name: "SQE Target",
          type: "line",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160,440, 505, 414, 671, 227, 413, 201, 352,369]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: ""
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1]
      },
      legend:{
        show:false
      },
      fill:{
        colors:["#00ff51"]
      },
      labels: [
        "Jan - 21",
        "Feb - 21",
        "Mar - 20",
        "Apr - 21",
        "May - 21",
        "Jun - 21",
        "Jul - 21",
        "Aug - 21",
        "Sep - 21",
        "Oct - 21",
        "Nov - 21",
        "Dec - 21",
        "Week - 1",
        "Week - 2",
        "Week - 3",
        "Week - 4",
        "27 - Dec",
        "28 - Dec",
        "29 - Dec",
        "30 - Dec",
        "31 - Dec",
      ],
      xaxis: {
        // type: ""
      },
      yaxis: [
        {
          title: {
            text: ""
          }
        }
      ]
    };

   }

  ngOnInit() {
  }
}
