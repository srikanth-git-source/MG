import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  filterToggle =false;
  constructor() { }
  values = [
    {Blocks:'Block A	',year1:'88',year2:'95',year3:'93',year4:'97',year5:'86'},
    {Blocks:'Block B	',year1:'100',year2:'99',year3:'91',year4:'88',year5:'90'},
    {Blocks:'Block C	',year1:'82',year2:'86',year3:'87',year4:'91',year5:'95'},
    {Blocks:'Warehouse	',year1:'79',year2:'98',year3:'81',year4:'94',year5:'98'},
    {Blocks:'Utilities',year1:'92',year2:'93',year3:'90',year4:'100',year5:'87'},
  ]
  ngOnInit() {
  }

}
