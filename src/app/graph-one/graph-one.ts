import { Component } from '@angular/core';
import { ChartComponent } from '../bar-chart/bar-chart';

@Component({
  selector: 'app-graph-one',
  imports: [ChartComponent],
  templateUrl: './graph-one.html',
  styleUrl: './graph-one.css',
})
export class GraphOne {
selectedTheme: 'light-theme' | 'dark-theme' = 'light-theme';

setCurrentTheme(theme: 'light-theme' | 'dark-theme') {
  this.selectedTheme = theme;
}

}
