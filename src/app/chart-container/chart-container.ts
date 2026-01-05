import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Chart,
  ChartConfiguration,
  registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-container',
  standalone: true,
  templateUrl: './chart-container.html',
  styleUrls: ['./chart-container.css']
})
export class ChartContainerComponent implements AfterViewInit {

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  private chart!: Chart;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser || !this.canvas) return;

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Financial Value',
            data: [1200, 1500, 1100, 1800, 1600, 2000, 1700, 2200, 2100, 2500, 2300, 2700],
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13,110,253,0.15)',
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          y: {
            ticks: {
              callback: value => `$${value}`
            }
          }
        }
      }
    };

    this.chart = new Chart(this.canvas.nativeElement, config);
  }
}
