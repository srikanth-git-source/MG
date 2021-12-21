import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss']
})
export class UpdateticketComponent implements OnInit {

  constructor() { }

  selected = 'domain';
  picked = 'high';
  choosen = 'praveen';
  

  ngOnInit() {
  }

}
