import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-progress-chart',
  templateUrl: './bar-chart.html',
  styleUrls: ['./bar-chart.css'],
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('financialChart') financialChartRef!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  // X-axis labels
  months: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  // Example monthly values (replace with real data)
  barValues: number[] = [12000, 13500, 9800, 15400, 16800, 17500, 16200, 18100, 19000, 21000, 23000, 25000];
  lineValues: number[] = [11000, 14000, 10000, 14800, 17000, 18000, 15800, 18500, 19500, 20800, 22800, 25500];

  ngAfterViewInit(): void {
    const ctx = this.financialChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    // Create a subtle gradient for line fill (optional)
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.35)');
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.02)');

    const options: ChartOptions<'bar' | 'line'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 12, usePointStyle: true },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const value = context.parsed.y ?? context.raw;
              const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }).format(Number(value));
              return `${context.dataset.label}: ${formatted}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#5b6470' },
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.08)' },
          ticks: {
            color: '#5b6470',
            callback: (value) =>
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }).format(Number(value)),
          },
        },
      },
    };

    const config: ChartConfiguration<'bar' | 'line'> = {
      type: 'bar', // Base type (we can mix per-dataset)
      data: {
        labels: this.months,
        datasets: [
          {
            type: 'bar',
            label: 'Monthly revenue',
            data: this.barValues,
            backgroundColor: 'rgba(99, 132, 255, 0.35)',
            borderColor: 'rgba(99, 132, 255, 0.8)',
            borderWidth: 1,
            borderRadius: 6,
            hoverBackgroundColor: 'rgba(99, 132, 255, 0.55)',
          },
          {
            type: 'line',
            label: 'Trend (line)',
            data: this.lineValues,
            tension: 0.35,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: gradient,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 3.5,
            fill: true,
          },
        ],
      },
      options,
    };

    this.chart = new Chart(ctx, config);
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }
}
