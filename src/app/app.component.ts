import { Component, VERSION } from '@angular/core';
import { NgChartjsModule } from 'ng-chartjs';

const DATA = [{"c":"42049","trap":"Trap1","trap_count":"0","pest_id_count":"","incremental_count":"0","cumulative_count":"6","daily_avg_count":"0","date":"2020-05-05"},{"c":"42048","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"6","daily_avg_count":"0","date":"2020-05-04"},{"c":"42047","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"6","daily_avg_count":"0","date":"2020-05-03"},{"c":"42046","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"6","daily_avg_count":"0","date":"2020-05-02"},{"c":"42045","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"6","daily_avg_count":"0","date":"2020-05-01"},{"c":"42044","trap":"Trap2","trap_count":"162","pest_id_count":"","incremental_count":"162","cumulative_count":"191","daily_avg_count":"32.4","date":"2020-05-05"},{"c":"42043","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"32.4","date":"2020-05-04"},{"c":"42042","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"32.4","date":"2020-05-03"},{"c":"42041","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"32.4","date":"2020-05-02"},{"c":"42040","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"32.4","date":"2020-05-01"},{"c":"42039","trap":"Trap3","trap_count":"89","pest_id_count":"","incremental_count":"89","cumulative_count":"121","daily_avg_count":"17.8","date":"2020-05-05"},{"c":"42038","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"32","daily_avg_count":"17.8","date":"2020-05-04"},{"c":"42037","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"32","daily_avg_count":"17.8","date":"2020-05-03"},{"c":"42036","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"32","daily_avg_count":"17.8","date":"2020-05-02"},{"c":"42035","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"32","daily_avg_count":"17.8","date":"2020-05-01"},{"c":"42034","trap":"Trap4","trap_count":"66","pest_id_count":"","incremental_count":"66","cumulative_count":"95","daily_avg_count":"13.2","date":"2020-05-05"},{"c":"42033","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"13.2","date":"2020-05-04"},{"c":"42032","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"13.2","date":"2020-05-03"},{"c":"42031","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"13.2","date":"2020-05-02"},{"c":"42030","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"29","daily_avg_count":"13.2","date":"2020-05-01"},{"c":"42029","trap":"Trap5","trap_count":"9","pest_id_count":"","incremental_count":"9","cumulative_count":"11","daily_avg_count":"1.8","date":"2020-05-05"},{"c":"42028","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"1.8","date":"2020-05-04"},{"c":"42027","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"1.8","date":"2020-05-03"},{"c":"42026","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"1.8","date":"2020-05-02"},{"c":"42025","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"1.8","date":"2020-05-01"},{"c":"42024","trap":"Trap3","trap_count":"21","pest_id_count":"","incremental_count":"21","cumulative_count":"32","daily_avg_count":"10.5","date":"2020-04-30"},{"c":"42023","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"11","daily_avg_count":"10.5","date":"2020-04-29"},{"c":"42022","trap":"Trap4","trap_count":"13","pest_id_count":"","incremental_count":"13","cumulative_count":"29","daily_avg_count":"6.5","date":"2020-04-30"},{"c":"42021","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"16","daily_avg_count":"6.5","date":"2020-04-29"},{"c":"42020","trap":"Trap2","trap_count":"21","pest_id_count":"","incremental_count":"21","cumulative_count":"29","daily_avg_count":"10.5","date":"2020-04-30"},{"c":"42019","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"8","daily_avg_count":"10.5","date":"2020-04-29"},{"c":"42018","trap":"Trap5","trap_count":"2","pest_id_count":"","incremental_count":"2","cumulative_count":"2","daily_avg_count":"1","date":"2020-04-30"},{"c":"42017","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"1","date":"2020-04-29"},{"c":"42016","trap":"Trap1","trap_count":"3","pest_id_count":"","incremental_count":"3","cumulative_count":"6","daily_avg_count":"1.5","date":"2020-04-30"},{"c":"42015","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"3","daily_avg_count":"1.5","date":"2020-04-29"},{"c":"42014","trap":"Trap3","trap_count":"9","pest_id_count":"","incremental_count":"9","cumulative_count":"11","daily_avg_count":"2.25","date":"2020-04-28"},{"c":"42013","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"2.25","date":"2020-04-27"},{"c":"42012","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"2.25","date":"2020-04-26"},{"c":"42011","trap":"Trap3","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"2.25","date":"2020-04-25"},{"c":"42010","trap":"Trap4","trap_count":"14","pest_id_count":"","incremental_count":"14","cumulative_count":"16","daily_avg_count":"3.5","date":"2020-04-28"},{"c":"42009","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"3.5","date":"2020-04-27"},{"c":"42008","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"3.5","date":"2020-04-26"},{"c":"42007","trap":"Trap4","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"2","daily_avg_count":"3.5","date":"2020-04-25"},{"c":"42006","trap":"Trap1","trap_count":"3","pest_id_count":"","incremental_count":"3","cumulative_count":"3","daily_avg_count":"0.75","date":"2020-04-28"},{"c":"42005","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"0.75","date":"2020-04-27"},{"c":"42004","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"0.75","date":"2020-04-26"},{"c":"42003","trap":"Trap1","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"0.75","date":"2020-04-25"},{"c":"42002","trap":"Trap5","trap_count":"0","pest_id_count":"","incremental_count":"0","cumulative_count":"0","daily_avg_count":"0","date":"2020-04-28"},{"c":"42001","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"0","date":"2020-04-27"},{"c":"42000","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"0","date":"2020-04-26"},{"c":"41999","trap":"Trap5","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"0","date":"2020-04-25"},{"c":"41998","trap":"Trap2","trap_count":"8","pest_id_count":"","incremental_count":"8","cumulative_count":"8","daily_avg_count":"2","date":"2020-04-28"},{"c":"41997","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"2","date":"2020-04-27"},{"c":"41996","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"2","date":"2020-04-26"},{"c":"41995","trap":"Trap2","trap_count":"","pest_id_count":"","incremental_count":"","cumulative_count":"0","daily_avg_count":"2","date":"2020-04-25"},{"c":"41994","trap":"Trap1","trap_count":"0","pest_id_count":"","incremental_count":"0","cumulative_count":"0","daily_avg_count":"0","date":"2020-04-24"},{"c":"41993","trap":"Trap2","trap_count":"0","pest_id_count":"","incremental_count":"0","cumulative_count":"0","daily_avg_count":"0","date":"2020-04-24"},{"c":"41992","trap":"Trap3","trap_count":"2","pest_id_count":"","incremental_count":"2","cumulative_count":"2","daily_avg_count":"2","date":"2020-04-24"},{"c":"41991","trap":"Trap4","trap_count":"2","pest_id_count":"","incremental_count":"2","cumulative_count":"2","daily_avg_count":"2","date":"2020-04-24"},{"c":"41990","trap":"Trap5","trap_count":"0","pest_id_count":"","incremental_count":"0","cumulative_count":"0","daily_avg_count":"0","date":"2020-04-24"},{"c":"41984","trap":"Zach Test Trap 1","trap_count":"10","pest_id_count":"","incremental_count":"10","cumulative_count":"10","daily_avg_count":"10","date":"2020-04-17"}];

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
public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 // Prepare dynamic data yAxis line
lineChartData: Array<any> = [
      {
        label: '2020',                       
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor:'rgba(0,0,0,0.7)',
        lineTension: 0, // curve or rounded line        
        pointHoverRadius: 4,
        pointHoverBorderWidth: 2,
        pointRadius: 3, // dot between curve       
      },
      {
        label: '2019',                
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

