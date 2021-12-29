import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-unit-trends',
  templateUrl: './unit-trends.component.html',
  styleUrls: ['./unit-trends.component.scss']
})
export class UnitTrendsComponent implements OnInit {

displayDashboard = true;
filterToggle: boolean;
filterState: string;
public excelData = [];

// view: any[] = [700, 400];

close = false;



  values = [
    {Blocks:'Block A	',mon1:'88',mon2:'95',mon3:'93',mon4:'97',mon5:'86',mon6:'88',mon7:'95',mon8:'93',mon9:'97',mon10:'86',mon11:'97',mon12:'86'},
    {Blocks:'Block B	',mon1:'100',mon2:'99',mon3:'91',mon4:'88',mon5:'90',mon6:'88',mon7:'95',mon8:'93',mon9:'97',mon10:'86',mon11:'97',mon12:'86'},
    {Blocks:'Block C	',mon1:'82',mon2:'86',mon3:'87',mon4:'91',mon5:'95',mon6:'88',mon7:'95',mon8:'93',mon9:'97',mon10:'86',mon11:'97',mon12:'86'},
    {Blocks:'Warehouse	',mon1:'79',mon2:'98',mon3:'81',mon4:'94',mon5:'98',mon6:'88',mon7:'95',mon8:'93',mon9:'97',mon10:'86',mon11:'97',mon12:'86'},
    {Blocks:'Utilities',mon1:'92',mon2:'93',mon3:'90',mon4:'100',mon5:'87',mon6:'88',mon7:'95',mon8:'93',mon9:'97',mon10:'86',mon11:'97',mon12:'86'},
  ]
public single: any[];
public singlee: any[];
public two: any[];
public three: any[];
public sizes: any[];
public colors: any[];
public width: any[];
public countries: any[];
public singles: any[];
public single1:any[];
public single2:any[];
public multi: any[];
public multiii: any[];
public multiiii: any[];
public multii: any[];
public multi1:any[];
public multi2:any[];
public versus1:any[];
public versus2:any[];
public analytics: any[];
public showLegend = true;
public showLegends = false;
public gradient = true;
public showXAxis = true;
public showYAxis = true;
public showXAxisLabel = false;
public xAxisLabel = 'Year';
public showYAxisLabel = false;
public yAxisLabel = 'Population';
public filterToggle1:boolean;
public colorScheme = {
 domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060','#CFC0BB']
}; 
public colorSchemee  = {
domain: ['rgb(255, 102, 0)','rgb(0, 128, 0)','rgb(255, 0, 0)']
}; 
public colorSchemeer  = {
  domain: ['rgb(128, 128, 128)','rgb(0, 128, 0)','rgb(255, 0, 0)']
  }; 
public colorSchemer = {
domain: ['rgb(252, 210, 2)',]
};
public showLabels = true;
public explodeSlices = false;
public doughnut = false;
//  public settings: Settings;
public autoScale = true; 

// options
animations: boolean = true;

constructor(
  public dialog: MatDialog,
  public appSettings: AppSettings,
  private router: Router,)
   {

    const single = [
      {
        name: 'DM',
        value: 15
      },
      {
        name: 'DE',
        value: 20
      },
      {
        name: 'SP',
        value: 18
      },
      {
        name: 'SO',
        value: 10
      },
      {
        name: 'PS',
        value: 17
      },
      {
        name: 'RF',
        value: 10
      },
      {
        name: 'Others',
        value: 30
      },
    ];
    const single1 = [
      {
        name: '0-30',
        value: 4
      },
      {
        name: '30-45',
        value: 8
      },
      {
        name: '45-60',
        value: 2
      },
      {
        name: '60-90',
        value: 5
      },
      {
        name: '90-120',
        value: 3
      },

      {
        name: '120+',
        value: 5
      },
    ];
    const single2 = [
      {
        name: 'Bad Weather',
        value: 15
      },
      {
        name: 'Supplier Delay',
        value: 20
      },
      {
        name: 'Client',
        value: 18
      },
      {
        name: 'Tight Estimates',
        value: 10
      },
      {
        name: 'Misc',
        value: 17
      },

      {
        name: 'Others',
        value: 35
      },
    ];
    const singlee = [
      {
        name: 'January 2015',
        value: 30
      },
      {
        name: 'February 2015',
        value: 10
      },
      {
        name: 'March 2015',
        value: 5
      },
      {
        name: 'April 2015',
        value: 10
      },
      {
        name: 'May 2015',
        value: 23
      },
      {
        name: 'June 2015',
        value: 43
      },
      {
        name: 'July 2015',
        value: 36
      },
      {
        name: 'August 2015',
        value: 60
      },
      {
        name: 'September 2015',
        value: 20
      },
      {
        name: 'October 2015',
        value: 15
      },
      {
        name: 'November 2015',
        value: 35
      },
      {
        name: 'December 2015',
        value: 25
      },
    ];
    const two = [
      {
        name: 'Manjeera Industries',
        value: 30
      },
      {
        name: 'Orion Group',
        value: 25
      },
      {
        name: 'Mantri Group',
        value: 10
      },
      {
        name: 'Asian Group',
        value: 15
      },
      {
        name: 'MNR Group',
        value: 20
      }
     
    ];
    const three = [
      {
        name: 'Manjeera Industries',
        value: 25
      },
      {
        name: 'Orion Group',
        value: 15
      },
      {
        name: 'Mantri Group',
        value: 9
      },
      {
        name: 'Asian Group',
        value: 30
      },
      {
        name: 'MNR Group',
        value: 21
      }
     
    ];
    const multi = [
      {
        "name": "Jan",
        "series": [
          {
            "name": "No of Audits",
            "value": 5
          },
        ]
      },
    
      {
        "name": "Feb",
        "series": [
          {
            "name": "No of Audits",
            "value": 24
          },
        ]
      },
    
      {
        "name": "Mar",
        "series": [
          {
            "name": "No of Audits",
            "value": 15
          },
        ]
      },
      {
        "name": "Apr",
        "series": [
          {
            "name": "No of Audits",
            "value": 26
          },
        ]
      },
      {
        "name": "May",
        "series": [
          {
            "name": "No of Audits",
            "value": 38
          },
        ]
      },
      {
        "name": "Jun",
        "series": [
          {
            "name": "No of Audits",
            "value": 26
          },
          
        ]
      },
      {
        "name": "Jul",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Aug",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Sep",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Oct",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Nov",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Dec",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
    
    ];
    const multii = [
      {
        "name": "Jan",
        "series": [
          {
            "name": "No of Tickets",
            "value": 5
          },
        ]
      },
    
      {
        "name": "Feb",
        "series": [
          {
            "name": "No of Tickets",
            "value": 24
          },
        ]
      },
    
      {
        "name": "Mar",
        "series": [
          {
            "name": "No of Tickets",
            "value": 15
          },
        ]
      },
      {
        "name": "Apr",
        "series": [
          {
            "name": "No of Tickets",
            "value": 26
          },
        ]
      },
      {
        "name": "May",
        "series": [
          {
            "name": "No of Tickets",
            "value": 38
          },
        ]
      },
      {
        "name": "Jun",
        "series": [
          {
            "name": "No of Tickets",
            "value": 26
          },
          
        ]
      },
      {
        "name": "Jul",
        "series": [
          {
            "name": "No of Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Aug",
        "series": [
          {
            "name": "No of Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Sep",
        "series": [
          {
            "name": "No of Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Oct",
        "series": [
          {
            "name": "No of Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Nov",
        "series": [
          {
            "name": "No of Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Dec",
        "series": [
          {
            "name": "No of Tickets",
            "value": 0
          },
        ]
      },
    
    ];
    const multiii = [
      {
        "name": "Jan",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 5
          },
        ]
      },
    
      {
        "name": "Feb",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 24
          },
        ]
      },
    
      {
        "name": "Mar",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 15
          },
        ]
      },
      {
        "name": "Apr",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 26
          },
        ]
      },
      {
        "name": "May",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 38
          },
        ]
      },
      {
        "name": "Jun",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 26
          },
          
        ]
      },
      {
        "name": "Jul",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Aug",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Sep",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Oct",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Nov",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Dec",
        "series": [
          {
            "name": "No of Chronic Tickets",
            "value": 0
          },
        ]
      },
    
    ];
    const multiiii = [
      {
        "name": "Jan",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 5
          },
        ]
      },
    
      {
        "name": "Feb",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 24
          },
        ]
      },
    
      {
        "name": "Mar",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 15
          },
        ]
      },
      {
        "name": "Apr",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 26
          },
        ]
      },
      {
        "name": "May",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 38
          },
        ]
      },
      {
        "name": "Jun",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 26
          },
          
        ]
      },
      {
        "name": "Jul",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Aug",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Sep",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Oct",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Nov",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 0
          },
        ]
      },
      {
        "name": "Dec",
        "series": [
          {
            "name": "No of Overdue Tickets",
            "value": 0
          },
        ]
      },
    
    ];
    const multi1 = [
      {
        "name": "Jan",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 80
          },
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 10
          }
        ]
      },
    
      {
        "name": "Feb",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 85
          },
          {
            "name": "Adjusted Downward Score in Jan",
            "value": 15
          }
        ]
      },
    
      {
        "name": "Mar",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 75
          },
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 8
          }
        ]
      },
      {
        "name": "Apr",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 86
          },
          {
            "name": "Adjusted Downward Score in Jan",
            "value": 9
          }
        ]
      },
      {
        "name": "May",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 79
          },
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 10
          }
        ]
      },
      {
        "name": "Jun",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 85
          },
          {
            "name": "Adjusted Downward Score in Jan",
            "value": 9
          }
        ]
      },
      {
        "name": "Jul",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 0
          },
          {
            "name": "Adjusted Downward Score in Jan",
            "value": 0
          }
        ]
      },
      {
        "name": "Aug",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 0
          },
          {
            "name": "Adjusted Downward Score in Jan",
            "value": 0
          }
        ]
      },
      {
        "name": "Sep",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 0
          },
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 0
          }
        ]
      },
      {
        "name": "Oct",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 0
          },
          {
            "name": "Adjusted Downward Score in Jan",
            "value": 0
          }
        ]
      },
      {
        "name": "Nov",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 0
          },
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 0
          }
        ]
      },
      {
        "name": "Dec",
        "series": [
          {
            "name": "Average Score in Jan",
            "value": 0
          },
          {
            "name": "Adjusted Downward Score in Jan",
            "value": 0
          }
        ]
      }
    ];
    const multi2 = [
      {
        "name": "DM",
        "series": [
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 80
          },
          {
            "name": "Collection",
            "value": 40
          }
        ]
      },
    
      {
        "name": "DE",
        "series": [
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 50
          },
          {
            "name": "Collection",
            "value": 70
          }
        ]
      },
    
      {
        "name": "SP",
        "series": [
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 70
          },
          {
            "name": "Collection",
            "value": 70
          }
        ]
      },
      {
        "name": "SO",
        "series": [
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 280
          },
          {
            "name": "Collection",
            "value": 0
          }
        ]
      },
      {
        "name": "PS",
        "series": [
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 250
          },
          {
            "name": "Collection",
            "value": 0
          }
        ]
      },
      {
        "name": "Others",
        "series": [
          {
            "name": "Adjusted Upward Score in Jan",
            "value": 350
          },
          {
            "name": "Collection",
            "value": 0
          }
        ]
      }
    ];
    const versus1 = [
      {
        "name": "Average Score in Jans",
        "series": [
          {
            "name": "April",
            "value": "10"
          },
          {
            "name": "June",
            "value": "90"
          },
          {
            "name": "August",
            "value": "120"
          },
          {
            "name": "October",
            "value": "400"
          },
          {
            "name": "December",
            "value": "210"
          },
        ],
      },
      {
        "name": "Adjusted Upward Score in Jan",
        "series": [
          {
            "name": "April",
            "value": "20"
          },
          {
            "name": "June",
            "value": "120"
          },
          {
            "name": "August",
            "value": "130"
          },
          {
            "name": "October",
            "value": "450"
          },
          {
            "name": "December",
            "value": "290"
          },
        ],
      },  
    ];
    const versus2 = [
      {
        "name": "Collection",
        "series": [
          {
            "name": "April",
            "value": "20"
          },
          {
            "name": "June",
            "value": "120"
          },
          {
            "name": "August",
            "value": "130"
          },
          {
            "name": "October",
            "value": "450"
          },
          {
            "name": "December",
            "value": "290"
          },
        ],
      }, 
    ];
    
    Object.assign(this, {multiiii,multiii,single,two,three,singlee,single1,single2,multi,multii,multi1,multi2,versus1,versus2});  
}
onSelect(data): void {
  console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}

onActivate(data): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}
ngOnInit() {
  this.hardcodeChart();
}
monthyPulseOfEmployees;
disciplineChartMonthly;
EmployeesOnboardingChart;
tentureOfEmployees;
conversationChart;
disciplinePercentagePieChart;
EmployeesOnboardedPieChart;
hiringMonthly;
receiveandpay:Chart;
aeginganalysis;
delaydistribution;

hardcodeChart() {

  this.monthyPulseOfEmployees = new Chart({

    chart: {
      type: 'column'
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    xAxis: {
      categories: ['DM', 'DE', 'SO', 'SP', 'PS','RF','FC','JO'],
      title: {
        text: null,
        style: {
          display: "none",
        },
      }
    },
    yAxis: {
      min: 0,
      title: {
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ''
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
   
    credits: {
      enabled: false
    },
    series: [ {
      name: 'Adjusted Upward Score in Jan',
      data: [19,27,52,90,30,27,14,25]
    }, {
      name: 'Expenses',
      data: [16,23,48,85,26,20,10,20]
    }]
  
  });

  this. receiveandpay = new Chart({

    chart: {
      type: 'bar'
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    xAxis: {
      categories: ['Manjeera Industries', 'Orion Group', 'Mantri Group', 'Asian Group', 'MNR Group'],
      title: {
        text: null,
        style: {
          display: "none",
        },
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'RS.',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' RS.'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
   
    credits: {
      enabled: false
    },
    series: [ {
      name: 'Receivables',
      data: [7000, 6000, 8000, 3000, 5000]
    }, {
      name: 'Payables',
      data: [8000, 3000, 6000, 2500, 7000]
    }]
  
  });

  this.EmployeesOnboardingChart = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
        showInLegend: true,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}">{point.name} Rs. </span>: <b>{point.y}Cr</b>',
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      title: {
        text: "Rs",
      },
    },
    
  });
  this.disciplineChartMonthly = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
        showInLegend: true,
      },
    },
    
    yAxis: {
      categories: [
        0,
        20,
        40,
        60,
        80,
        95
       
      ],
      title: {
        text: "Percentage",
      },
    },

    xAxis: {
      categories: [
       
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
       
      ],
    },
    series: [
      {
        type: "line",
        color: "rgb(33, 101, 190)",
        data: [0, 40, 60, 75, 85, 95],
      },
    ],
  });
  this.hiringMonthly = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
        showInLegend: true,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}">{point.name} Number of hirings </span>: <b>{point.y}</b>',
    },
    yAxis: {
      title: {
        text: "Hirings",
      },
    },

    xAxis: {
      categories: [
       
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
       
      ],
    },
    series: [
      {
        type: "line",
        color: "rgb(33, 101, 190)",
        data: [4, 8, 2, 4, 6, 3],
      },
    ],
  });
  this.tentureOfEmployees = new Chart({
    chart: {
      type: "column",
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      categories: [
        "Manjeera Industries",
        "Orion Group",
        "Mantri Group",
        "Asian Group",
        "MNR Group",
      ],
    },
    yAxis: {
      title: {
        text: "%",
      },
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
        showInLegend: true,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
    },
    series: [
      {
        type: "bar",
        color: "rgb(33, 101, 190)",
        data: [
          {
            name: "Manjeera Industries",
            y: 70,
          },
          {
            name: "Orion Group",
            y: 60,
          },
          {
            name: "Mantri Group",
            y: 30,
          },
          {
            name: "Asian Group",
            y: 80,
          },
          {
            name: "MNR Group",
            y: 50,
          },
        ],
      },
    ],
  }); 
  this. aeginganalysis = new Chart({
    chart: {
      type: "column",
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    credits: {
      enabled: false,
    },

    yAxis: {
      title: {
        text: "%",
      },
    },
    xAxis: {
      categories: [
        "Less than 30 Days",
        "30-60 Days",
        "60-90 Days",
        "90-180 Days",
        "More than 6 Months",
      ],
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
        showInLegend: false,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
    },
    series: [
      {
        type: "bar",
        color: "rgb(33, 101, 190)",
        data: [
          {
            name: "Less than 30 Days",
            y: 70,
          },
          {
            name: "30-60 Days",
            y: 60,
          },
          {
            name: "60-90 Days",
            y: 30,
          },
          {
            name: "90-180 Days",
            y: 80,
          },
          {
            name: "More than 6 Months",
            y: 50,
          },
        ],
      },
    ],
  });
  this.delaydistribution = new Chart({
    chart: {
      type: "bar",
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    credits: {
      enabled: false,
    },

    yAxis: {
      title: {
        text: "%",
      },
    },
    xAxis: {
      categories: [
        "Funds",
        "Delay in Procurement",
        "Labour Shortage",
        "Bad Planning",
        "Low Productivity",
        "Others"
      ],
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
        showInLegend: false,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}"> </span>: <b>{point.y}%</b>',
    },
    series: [
      {
        type: "bar",
        color: "rgb(33, 101, 190)",
        data: [
          {
            name: "Funds",
            y: 25,
          },
          {
            name: "Delay in Procurement",
            y: 15,
          },
          {
            name: "Labour Shortage",
            y: 20,
          },
          {
            name: "Bad Planning",
            y: 20,
          },
          {
            name: "Low Productivity",
            y: 10,
          },
          {
            name: "Others",
            y: 10,
          },
        ],
      },
    ],
  });
  this.conversationChart = new Chart({
    chart: {
      type: "line",
    },
    title: {
      text: null,
      style: {
        display: "none",
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
        showInLegend: true,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{point.color}">{point.name} count </span>: <b>{point.y}</b>',
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    series: [
      {
        type: "line",
        color: "rgb(33, 101, 190)",
        data: [15, 40, 35, 30, 32, 25, 36, 20, 30, 28, 36, 39],
      },
    ],
  });
  this.disciplinePercentagePieChart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<br>{point.percentage:.1f} %",
          distance: -50,
        },
      },
    },
    series: [
      {
        type: "pie",
        // innerSize:'30%',
        name: "Share",
        data: [
          { name: "0 exceptions", y: 51, color: "rgb(26, 59, 204)" },
          { name: "1-2 exceptions", y: 23, color: "rgb(212, 87, 14)" },
          { name: "3-6 exceptions", y: 12, color: "grey" },
          { name: "6-10 exceptions", y: 7, color: "rgb(197, 185, 13)" },
          { name: "10+ exceptions", y: 7, color: "rgb(74, 120, 189)" },
        ],
      },
    ],
  });
  this.EmployeesOnboardedPieChart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      plotBackgroundImage: null,
      type: "pie",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    yAxis: {
      title: {
        text: "No of Employees",
      },
    },
    tooltip: {
      pointFormat: "{series.name}:<b>{point.percentage:.1f}%</b>",
    },
    
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<br>{point.percentage:.1f} %",
          distance: -24,
        },
      },
    },
    series: [
      {
        type: "pie",
        
        name: "Share",
        data: [
          { name: "1st Qtr", y: 62, color: "rgb(26, 59, 204)" },
          { name: "2nd Qtr", y: 15, color: "rgb(212, 87, 14)" },
          { name: "3rd Qtr", y: 13, color: "grey" },
          { name: "4th Qtr", y: 10, color: "rgb(197, 185, 13)" },
        ],
      },
    ],
  });
}

changeDisplay() {
  this.displayDashboard = !this.displayDashboard;
}

filterFunction() {
  this.filterToggle = !this.filterToggle;
  this.filterState = this.filterToggle === true ? 'initial' : 'final';
}

selectedItem(event: Event) {
  const treeElement = (<HTMLElement>event.target).innerHTML;

  const companies = ['Sector 56', 'Lansdowne', 'Newton'];
  const contracts = ['Landscaping', 'Club House', 'Restaurant', 'Parking Lot', 'Tower A', 'Tower B', 'Tower C', 'Common Facilities'];

  const isCompany = companies.filter(company => treeElement.includes(company)).length > 0 ? true : false;
  const isContract = contracts.filter(contract => treeElement.includes(contract)).length > 0 ? true : false;

  if (isCompany) {
    this.router.navigate(['/mrc/projects/newproject-dashboard/project-budget/company']);
  } else if (isContract) {
    this.router.navigate(['/mrc/projects/newproject-dashboard/project-budget/contract']);
  }
}


}

