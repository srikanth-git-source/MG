import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss']
})
export class RankingTableComponent implements OnInit {
  filterToggle =false;
  constructor() { }

  ngOnInit() {
  }
  values=[
    {Rank:'1',Unit:'CTO_1	',Location:'Hyderabad',Average:'92.3'},
    {Rank:'2',Unit:'FTO_1	',Location:'Chennai',Average:'91.2'},
    {Rank:'3',Unit:'CTO_3	',Location:'New Delhi	',Average:'90.6'},
    {Rank:'4',Unit:'FTO_5	',Location:'Vishakapatnam	',Average:'84'},
  ]
}
