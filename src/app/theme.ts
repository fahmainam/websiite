import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDark = false;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      this.isDark = savedTheme === 'dark';
      document.body.classList.toggle('dark-theme', this.isDark);
    }
  }

  toggleTheme(): void {
    if (!this.isBrowser) return;

    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme', this.isDark);
  }

  getTheme(): boolean {
    return this.isDark;
  }
}
