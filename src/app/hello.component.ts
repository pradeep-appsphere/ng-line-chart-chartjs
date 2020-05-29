import { Component, Input } from '@angular/core';

@Component({
  selector: 'chartTitle',
  template: `<h3>{{name}}!</h3>`
})
export class ChartTitleComponent  {
  @Input() name: string;
}
