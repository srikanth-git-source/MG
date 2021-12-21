import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, subDays, addDays, addHours, isSameMonth, isSameDay } from 'date-fns';
import { Subject } from 'rxjs';
import { AppSettings } from '../app.settings';
import { DeleteConfirmDialogComponent } from '../shared/delete-confirm-dialog/delete-confirm-dialog.component';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  grey: {
    primary: '#717D7E',
    secondary: '#717D7E'
  }
};
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  viewNumber: number = 1;

  totalProjects = [
    { logDate: '04/07/2021', type: 'Heavy Equipment', projectName: 'Hinduja', assetName: 'Forklifts',  serial: 'BK-934F321O32', bdType:'Ware and Tare', remarks: 'Corroded parts at pully joints', repairTime: '4 Hours', amc: 'AMC', doneBy: 'Ashok Maram' }, 
    { logDate: '06/07/2021', type: 'Heavy Equipment', projectName: 'Mittal PowerX', assetName: 'Tippers',  serial: 'CAT-94T341O92', bdType:'Fuctional issues', remarks: 'Fuctional Issues in critical parts', repairTime: '2 Hours', amc: 'Warranty', doneBy: 'Balakrishna' },
    { logDate: '08/06/2021', type: 'Heavy Equipment', projectName: 'Jones Lang LaSalle', assetName: 'Trenchers',  serial: 'VO-732RE21O35', bdType:'Defective Parts', remarks: 'Displaced parts due to heavy loads', repairTime: '3 Hours', amc: 'N/A', doneBy: 'Srikath J' },
    { logDate: '07/07/2021', type: 'Hand and Power tools', projectName: 'Cushman and Wakefield', assetName: 'Crimpers',  serial: 'HK-724D31R32', bdType:'Ware and Tare', remarks: 'Fuctional Issues in Grader parts', repairTime: '6 Hours', amc: 'Warranty', doneBy: 'Vinoop' },
    { logDate: '04/07/2021', type: 'Consumables and Building Materials', projectName: 'Addison Tools Co', assetName: 'Drill Bits',  serial: 'Ad-234T12J56', bdType:'Ware and Tare', remarks: 'High speed steel tools required with carbide tip', repairTime: '7 Hours', amc: 'AMC', doneBy: 'Manikanta C' }, 
  ];

months = [{ id: 1, value: "January" }, { id: 2, value: "February" }, { id: 3, value: "March" }, { id: 4, value: "April" }, { id: 5, value: "May" }, { id: 6, value: "June" }, { id: 7, value: "July" }, { id: 8, value: "August" }, { id: 9, value: "September" }, { id: 10, value: "October" }, { id: 11, value: "November" }, { id: 12, value: "December" }];
  years = [{ id: 1, value: "2019" }, { id: 2, value: "2020" }, { id: 3, value: "2021" }];
  calendarEvents = [];
  view: string = 'month';
  public meetings_filter = "";
  public meetings_filters = "";
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;
  filterToggle: boolean = false;
  events: CalendarEvent[] = [{
    start: new Date(),
    end: new Date(),
    title: 'Project name: Jones Lang LaSalle (Displaced parts due to heavy loads)',
    color: colors.red,
  }, {
    start: startOfDay(new Date()),
    title: 'Project name: Mittal PowerX (Fuctional Issues in critical parts)',
    color: colors.yellow,
  }, {
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(startOfDay(new Date()), 1),
    title: 'Project name: Hinduja (Corroded parts at pully joints)',
    color: colors.blue
  }, {
    start: addHours(startOfDay(new Date()), 1),
    end: addDays(startOfDay(new Date()), 1),
    title: 'Project name: Cushman and Wakefield (Weared parts, require new tools for work)',
    color: colors.yellow,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }];
  refresh: Subject<any> = new Subject();


  totalMeetings: any;

  canCreate: any;
  canUpdate: any;
  canDelete: any;

  gridRead: any;
  calenderRead: any;

  constructor(public dialog: MatDialog,public appSettings:AppSettings) { }

 
  ngOnInit() {
  }


  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  changeView(value: number) {
    if(value == 1) {
      this.viewNumber = 1;
    } else if (value == 2) {
      this.viewNumber = 2;
    }
  }


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    // this.handleEvent('Dropped or resized', event);
  }

}
