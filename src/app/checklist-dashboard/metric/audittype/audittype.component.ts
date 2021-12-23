import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audittype',
  templateUrl: './audittype.component.html',
  styleUrls: ['./audittype.component.scss']
})
export class AudittypeComponent implements OnInit {

  public three: any[];
  public single: any[];
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
        name: 'Produsct Quality Audit',
        value: 29
      },
      {
        name: 'Body',
        value: 12
      },
      {
        name: 'Paint Audit',
        value: 26
      }
     
    ];
    Object.assign(this, {three}); 
   }

  ngOnInit() {
  }

  items = [
    {audtitype:"Product Quality Audit",issues:20}, 
    {audtitype:"Body Audit",issues:7},
    {audtitype:"Paint Audit",issues:11},
    {audtitype:"Product Quality Audit",issues:9}, 
    {audtitype:"Body Audit",issues:5},
    {audtitype:"Paint Audit",issues:15},

    
    ];

   


}
