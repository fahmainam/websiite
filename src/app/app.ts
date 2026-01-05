import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { ThemeService } from './theme';
import {  BarChartComponent } from './bar-chart/bar-chart';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    SidebarComponent,BarChartComponent
  ],
template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
     <!-- <app-sidebar-component'></app-sidebar-component> -->

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>`,
  
  templateUrl: './app.html',
  styleUrls: ['./app.css']
  
})


export class App {
  title = signal('dashboard-admin');
  constructor(public themeService: ThemeService) {}

    isSidebarCollapsed = false;
    toggleSidebar(): void {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    
    }
    

}













