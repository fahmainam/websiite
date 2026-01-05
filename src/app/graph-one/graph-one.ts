import { Component } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart';

@Component({
  selector: 'app-graph-one',
  imports: [BarChartComponent],
  templateUrl: './graph-one.html',
  styleUrl: './graph-one.css',
})
export class GraphOne {
selectedTheme: 'light-theme' | 'dark-theme' = 'light-theme';

setCurrentTheme(theme: 'light-theme' | 'dark-theme') {
  this.selectedTheme = theme;
}

}
