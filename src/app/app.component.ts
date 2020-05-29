import { Component, VERSION } from '@angular/core';
import { NgChartjsModule } from 'ng-chartjs';


@Component({
selector: 'my-app',
templateUrl: './app.component.html',
styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
name = "Line Chart";

// lineChart

public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 
public lineChartOptions: any = {
  responsive: true  
};

public lineChartLegend = true;
public lineChartType = 'line';


lineChartData: Array<any> = [
      {
        label: 'First',                       
        data: [65, 59, 80, 81, 56, 55, 40],  
        fill: false,
        lineTension: 0, // curve or rounded line        
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 3, // dot between curve       
      },
      {
        label: 'Second',                
        data: [90, 73, 3, 44, 33, 66, 90],
        fill: false,
        lineTension: 0, // curve or rounded line        
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 3, // dot between curve          
      }
  ];

constructor() { }

ngOnInit() {
}
}

