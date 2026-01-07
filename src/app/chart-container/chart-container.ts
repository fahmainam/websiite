import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.html'
})
export class ChartContainerComponent implements AfterViewInit {
ngOnDestroy() {
  this.chart?.destroy();

}


  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart<'line'>; // declare the chart instance

  ngAfterViewInit() {
    // Ensure the canvas is available
    if (!this.chartCanvas) return;

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
              callback: (value: any) => `$${value}`
            }
          }
        }
      }
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }
}
  