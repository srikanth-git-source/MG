import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-das-par-variant',
  templateUrl: './das-par-variant.component.html',
  styleUrls: ['./das-par-variant.component.scss']
})
export class DasParVariantComponent implements OnInit {

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
        name: 'VDI',
        value: 129
      },
      {
        name: 'SXI',
        value: 75
      },
      {
        name: 'SXI(o)',
        value: 119
      },
      {
        name: 'LDI',
        value: 32
      },
      
     
    ];
    const first = [
      {
        name: 'VDI',
        value: 20
      },
      {
        name: 'SXI',
        value: 7
      },
      {
        name: 'SXI(o)',
        value: 11
      },
      {
        name: 'LDI',
        value: 9
      },
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {variant:'VDI',demerit:129,issues:20}, 
    {variant:'SXI',demerit:75,issues:7},
    {variant:'SXI(o)',demerit:119,issues:11},
    {variant:'LDI',demerit:32,issues:9},
    
    
    
    ];

}
