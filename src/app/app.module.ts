import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChartTitleComponent } from './hello.component';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgChartjsModule ],
  declarations: [ AppComponent, ChartTitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
