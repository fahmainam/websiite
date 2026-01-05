import { Component, AfterViewInit } from '@angular/core';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.html',
  styleUrls: ['./chart-container.css']
})
export class ChartContainer implements AfterViewInit {
message: string = '';

toggleMessage() {
  this.message = this.message ? '' : 'Hello Angular';
}
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('assetsChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
         'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
          'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ],
        datasets: [
          {
            label: 'Planned Assets',
            data: [400, 450, 380, 500, 620, 700, 650, 480, 520, 750, 680, 800],
            backgroundColor: '#cfe1ff',
            borderRadius: 6,
            stack: 'assets'
          },
          {
            label: 'Actual Assets',
            data: [300, 380, 320, 420, 550, 600, 580, 390, 460, 670, 600, 720],
            backgroundColor: '#7aa7ff',
            borderRadius: 6,
            stack: 'assets'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 14,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.dataset.label}: QAR${context.parsed.y}`;
              }
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              callback: (value) => `QAR${value}`
            }
          }
        }
      }
    });
  }
}
