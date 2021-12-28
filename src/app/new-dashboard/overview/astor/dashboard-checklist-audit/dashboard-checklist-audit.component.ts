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
  selector: 'app-dashboard-checklist-audit',
  templateUrl: './dashboard-checklist-audit.component.html',
  styleUrls: ['./dashboard-checklist-audit.component.scss']
})
export class DashboardChecklistAuditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }




}
