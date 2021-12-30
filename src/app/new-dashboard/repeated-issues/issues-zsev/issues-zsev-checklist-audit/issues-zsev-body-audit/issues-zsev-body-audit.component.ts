import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-zsev-body-audit',
  templateUrl: './issues-zsev-body-audit.component.html',
  styleUrls: ['./issues-zsev-body-audit.component.scss']
})
export class IssuesZsevBodyAuditComponent implements OnInit {

  filterToggle=false;
  constructor() { }


  ngOnInit() {
  }

  items=[
    {issue:"	RHR BSO Ding",vehicles:"10",m1:"4",m2:"3",m3:"3",s1:"2",s2:"6",s3:"1",s4:"1",s5:"0",status:"This Issue is now sorted"},
    {issue:"	LHR Door outer scratch",vehicles:"50",m1:"15",m2:"20",m3:"15",s1:"10",s2:"10",s3:"15",s4:"10",s5:"5",status:"This Issue is now sorted"},
    {issue:"Roof rail - Sink marks / Waviness",vehicles:"60",m1:"20",m2:"15",m3:"25",s1:"20",s2:"30",s3:"5",s4:"3",s5:"2",status:"This Issue is now sorted"},
    {issue:"	RHR BSO Ding",vehicles:"30",m1:"10",m2:"10",m3:"10",s1:"20",s2:"6",s3:"2",s4:"1",s5:"1",status:"This Issue is now sorted"},
    {issue:"Rear bumper contamination",vehicles:"40",m1:"10",m2:"15",m3:"15",s1:"8",s2:"8",s3:"8",s4:"8",s5:"8",status:"This Issue is now sorted"},
  ]

}
