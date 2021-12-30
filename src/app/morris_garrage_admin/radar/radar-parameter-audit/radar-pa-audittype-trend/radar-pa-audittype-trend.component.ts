import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-pa-audittype-trend',
  templateUrl: './radar-pa-audittype-trend.component.html',
  styleUrls: ['./radar-pa-audittype-trend.component.scss']
})
export class RadarPaAudittypeTrendComponent implements OnInit {

  
   
  public three: any[];
  public single: any[];
  public first: any[];
  // view: any[] = [250,300];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  constructor() {
    const three = [
      {
        name: 'C Rating',
        value: 1290
      },
      {
        name: 'D Rating',
        value: 320
      },
     
   
     
    ];
    const first = [
      {
        name: 'C Rating',
        value: 20
      },
      {
        name: 'D Rating',
        value: 13
      },
     
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {model:'C Rating',demerit:'60%',issues:20}, 
    {model:'D Rating',demerit:'20%',issues:70},
   
    
    
    ];


}
