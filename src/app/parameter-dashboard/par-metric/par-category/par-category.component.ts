import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-par-category',
  templateUrl: './par-category.component.html',
  styleUrls: ['./par-category.component.scss']
})
export class ParCategoryComponent implements OnInit {
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
        name: 'Exterior',
        value: 1290
      },
      {
        name: 'Interior',
        value: 320
      }, 
    ];
    const first = [
      {
        name: 'Exterior',
        value: 20
      },
      {
        name: 'Interior',
        value: 13
      },
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {Category:'Exterior',demerit:1290,issues:20}, 
    {Category:'Interior',demerit:751,issues:7},
   

    ];
}
