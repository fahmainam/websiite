import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Chart,
  ChartConfiguration,
  ChartOptions,
  registerables
} from 'chart.js';

Chart.register(...registerables);

type Theme = 'light-theme' | 'dark-theme';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.html',
  styleUrls: ['./bar-chart.css']
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() theme: Theme = 'light-theme';

  private chart!: Chart;

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['theme'] && this.chart) {
      this.applyTheme();
    }
  }

  private createChart() {
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو'],
        datasets: [
          {
            label: 'الطلبات',
            data: [120, 190, 300, 250, 220],
            backgroundColor: '#0d6efd',
            borderRadius: 6
          }
        ]
      },
      options: this.getChartOptions()
    };

    this.chart = new Chart('barChartCanvas', config);
  }

  private getChartOptions(): ChartOptions<'bar'> {
    return this.theme === 'dark-theme'
      ? this.darkThemeOptions()
      : this.lightThemeOptions();
  }

  private applyTheme() {
    this.chart.options = this.getChartOptions();
    this.chart.update();
  }

  private darkThemeOptions(): ChartOptions<'bar'> {
    return {
      plugins: {
        legend: {
          labels: { color: '#fff' }
        }
      },
      scales: {
        x: {
          ticks: { color: '#fff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        y: {
          ticks: { color: '#fff' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    };
  }

  private lightThemeOptions(): ChartOptions<'bar'> {
    return {
      plugins: {
        legend: {
          labels: { color: '#333' }
        }
      },
      scales: {
        x: {
          ticks: { color: '#333' },
          grid: { color: '#e9ecef' }
        },
        y: {
          ticks: { color: '#333' },
          grid: { color: '#e9ecef' }
        }
      }
    };
  }
}
