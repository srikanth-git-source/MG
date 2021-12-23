import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  constructor() { }

  items = [
    {screen:'Radar',create: false, read: true, update: false, delete: false},
    {screen:'Dashboard',create: false, read: true, update: false, delete: false},
    {screen:'Dashboard >> Overview',create: false, read: true, update: false, delete: false},
    {screen:'Dashboard >> Quality Audit',create: false, read: true, update: false, delete: false},
    {screen:'Dashboard >> Agency Report',create: false, read: true, update: false, delete: false},
    {screen:'Dashboard >> Repeated Issues',create: false, read: true, update: false, delete: false},
    {screen:'Audits',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Issue Log',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics >> Severity',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics >> Agency',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics >> Model',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics >> Fuel Type',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics >> Transmissions',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics >> Variant',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Metrics >> Module',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> CheckList >> Notes',create: false, read: true, update: false, delete: false},

    {screen:'Audits >> Parameter',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Issue Log',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Metrics',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Metrics >> Category',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Metrics >> Model',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Metrics >> Fuel Type',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Metrics >> Transmissions',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Metrics >> Variant',create: false, read: true, update: false, delete: false},
    {screen:'Audits >> Parameter >> Notes',create: false, read: true, update: false, delete: false},
    

    {screen:'Checklist Setup',create: false, read: true, update: false, delete: false},
    {screen:'Checklist Setup >> Module Master',create: false, read: true, update: false, delete: false},
    {screen:'Checklist Setup >> Function Master',create: false, read: true, update: false, delete: false},
    {screen:'Checklist Setup >> Defect Master',create: false, read: true, update: false, delete: false},
    {screen:'Checklist Setup >> Issue Master',create: false, read: true, update: false, delete: false},
    {screen:'Checklist Setup >> Audit Master',create: false, read: true, update: false, delete: false},
    {screen:'Parameter Setup',create: false, read: true, update: false, delete: false},
    {screen:'Parameter Setup >> Category Master',create: false, read: true, update: false, delete: false},
    {screen:'Parameter Setup >> Measurement Master',create: false, read: true, update: false, delete: false},
    {screen:'Parameter Setup >> Checkpoint Master',create: false, read: true, update: false, delete: false},
    {screen:'Admin',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Users',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Organisations >> Location Master',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Organisations >> Agency Master',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Settings',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Lookup Options',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Master Data >> Model Master',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Master Data >> Variant Master',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Master Data >> Interior Trim',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Master Data >> Colour',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Master Data >> Transmission',create: false, read: true, update: false, delete: false},
    {screen:'Admin >> Master Data >> Fuel Type',create: false, read: true, update: false, delete: false},

  ];

  ngOnInit() {
    console.log("Permissions Length: ", this.items.length)
  }

  saveUserPermissions()
  {
    
  }

}
