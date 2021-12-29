import { Component, OnInit } from '@angular/core';
import { Chart } from "angular-highcharts";
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-ticket-distribution',
  templateUrl: './ticket-distribution.component.html',
  styleUrls: ['./ticket-distribution.component.scss']
})
export class TicketDistributionComponent implements OnInit {

  public single: any[];
  public two: any[];
  public three: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true; 
 
   constructor(public appSettings:AppSettings) {
     this.settings = this.appSettings.settings; 
     const single = [
       {
         name: 'Bengaluru',
         value: 30
       },
       {
         name: 'Hyderabad',
         value: 25
       },
       {
         name: 'New Delhi',
         value: 10
       },
       {
         name: 'Chennai',
         value: 15
       },
       {
         name: 'Ahmedabad',
         value: 20
       }
      
     ];
     const two = [
      {
        name: 'CTO1',
        value: 30
      },
      {
        name: 'CTO2',
        value: 25
      },
      {
        name: 'CTO3',
        value: 10
      },
      {
        name: 'CTO4',
        value: 15
      },
      {
        name: 'CTO5',
        value: 20
      },
       {
         name: 'FTO1',
         value: 30
       },
       {
         name: 'FTO2',
         value: 25
       },
       {
         name: 'FTO3',
         value: 10
       },
       {
         name: 'FTO4',
         value: 15
       },
       {
         name: 'FTO5',
         value: 20
       }
      
     ];
     const three = [
       {
         name: 'Drainage',
         value: 25
       },
       {
         name: 'Building & Infra',
         value: 15
       },
       {
         name: 'Pipe Bridges',
         value: 9
       },
       {
         name: 'Building Internal',
         value: 30
       },
       {
         name: 'Pipe Work',
         value: 21
       }
      
     ];
     Object.assign(this, {single,two,three}); 
   }
 
   values = [
     {Ticket:'TKT000798',Location:'Hyderabad',Unit:'CTO 1	',Block:'CTO_1 Block A	',Section:'Drainage',Priority:'High',Status:'Assigned',Audit:'Site Surveyor	',Surveyor:'Navin',Assigned:'Surya',Overdue:'Yes',DueDate:'18-06-2019	',Chronic:'No'},
     {Ticket:'TKT000797',Location:'New Delhi	',Unit:'CTO 2',Block:'FTO_2 Block C	',Section:'Building & Infra	',Priority:'Medium',Status:'Resolved',Audit:'Central Surveyor	',Surveyor:'Rami Reddy	',Assigned:'Harish	',Overdue:'Yes',DueDate:'17-06-2019	',Chronic:'No'},
     {Ticket:'TKT000796',Location:'Vishakapatnam',Unit:'CTO 3',Block:'CTO_2 Warehouse	',Section:'Building Internal	',Priority:'Low',Status:'Rejected',Audit:'Site Surveyor	',Surveyor:'Dipen',Assigned:'Praveen',Overdue:'Yes',DueDate:'17-06-2019	',Chronic:'No'},
   ]
   ngOnInit() {
   }
   
  
 }
