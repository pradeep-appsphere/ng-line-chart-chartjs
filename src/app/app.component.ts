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

public lineChartOptions: any = {
  responsive: true,
  scales: {
      xAxes: [{
          gridLines: {
              drawOnChartArea: false
          }
      }],
      yAxes: [{
            gridLines: {
              drawOnChartArea: false
          } 
      }]
  },
  legend: {
        display: true,
        position:'right',        
        labels: {          
            fontColor: '#444',
            boxWidth:12,
            padding:8,
        },        
    },
    tooltips: {
            // Disable the on-canvas tooltip
            enabled: false,

            custom: function(tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<div style="color:#fff;background:rgba(0,0,0,0.6); border-radius:3px;padding:4px;"><table></table></div>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = '0';
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                  
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th colspan="2">' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                         
                        innerHtml += '<tr><td width="15"><span style="padding:1px 8px;background:'+colors.backgroundColor+';"></span></td><td>' + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = '1';
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
            }
        }
};
public lineChartLegend = true;
public lineChartType = 'line';


// Prepare dynamic data xAxis Label
public lineChartLabels: Array<any> = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
 // Prepare dynamic data yAxis line
lineChartData: Array<any> = [
      {
        label: '2020',                       
        data: [0, 4.4, 4.5, 4, 0, 4, 7],
        fill: false,
        backgroundColor:'rgba(0,0,0,0.7)',
        lineTension: 0, // curve or rounded line        
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 3, // dot between curve       
      },
      {
        label: '2019',                
        data: [2, 1.4, 4, 3, 2, 3, 3, 5],
        fill: false,
        lineTension: 0, // curve or rounded line        
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 3, // dot between curve          
      },
      {
        label: '2018',                
        data: [5, 3.4, 4, 4, 3, 5.5, 4, 6],
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

