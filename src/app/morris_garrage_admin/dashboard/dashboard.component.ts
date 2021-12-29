import { Component, OnInit,AfterViewInit,OnDestroy,ViewEncapsulation, Inject, ElementRef } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit{
  showCA = false;
  showPA = true;
 
  constructor() { }

 
  ngOnInit() {
  }

  //  CA() {
  //   console.log(this.showCA);
  //   console.log(this.showPA);
  // if(this.showCA == false){
  //   this.showCA = true;
  //   this.showPA = false;

  // }else{
  //   this.showPA = true;
  //   this.showCA = false;
  // }
  // }
  

  CA() {
     
    if(this.showPA == true){
      this.showCA = false;
      this.showPA = true;
  
    }else if(this.showCA == true){
      this.showPA = false;
      this.showCA = true;
    }
    }
    



  // public PA(){
  //   if(this.showPA == false){
  //        this.showPA=true;
  //        this.showCA = false;
  //     }else{
  //       this.showPA = false;
  //     }
  //     }
}