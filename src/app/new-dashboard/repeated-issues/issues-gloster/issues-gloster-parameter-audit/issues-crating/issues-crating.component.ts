import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-crating',
  templateUrl: './issues-crating.component.html',
  styleUrls: ['./issues-crating.component.scss']
})
export class IssuesCratingComponent implements OnInit {

  filterToggle=false;
  constructor() { }


  ngOnInit() {
  }

  items=[
    {issue:"1A - HOOD TO FRONT GRILL- GAP( a )",vehicles:"10",m1:"4",m2:"3",m3:"3",status:"This Issue is now sorted"},
    {issue:"	1A - HOOD TO FRONT GRILL - GAP( b )",vehicles:"20",m1:"14",m2:"3",m3:"3",status:"This Issue is now sorted"},
    {issue:"1 - TAILGATE TRIM TO DECORATIVE PANEL - FLUSH",vehicles:"30",m1:"24",m2:"3",m3:"3",status:"This Issue is now sorted"},
    {issue:"1A - HOOD TO FRONT GRILL- GAP( a )",vehicles:"40",m1:"34",m2:"3",m3:"3",status:"This Issue is now sorted"},
    {issue:"6 - TAILGATE TRIM to TAILGATE GLASS BLACK EDGE - DIST",vehicles:"50",m1:"44",m2:"3",m3:"3",status:"This Issue is now sorted"},
  ]

}
