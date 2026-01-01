import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

export interface StatsCardOne {
  label: string;
  amount: string;
  icon: string;
  trendValue: string;
  trendDirection: 'up' | 'down';
  period: string;
}

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './stat-card-one.html',
  styleUrls: ['./stat-card-one.css']
})
export class StatCardOne implements OnChanges {

  @Input() statsCards: StatsCardOne[] = [];

  slides: StatsCardOne[][] = [];
  cardsPerSlide = 4;

  ngOnChanges() {
    this.buildSlides();
  }

  private buildSlides() {
    this.slides = [];
    for (let i = 0; i < this.statsCards.length; i += this.cardsPerSlide) {
      this.slides.push(this.statsCards.slice(i, i + this.cardsPerSlide));
    }
  }

  getTrendClass(card: StatsCardOne) {
    return card.trendDirection === 'up' ? 'trend-up' : 'trend-down';
  }

  getTrendIcon(card: StatsCardOne) {
    return card.trendDirection === 'up'
      ? 'bi bi-graph-up-arrow'
      : 'bi bi-graph-down-arrow';
  }
}
