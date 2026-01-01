import { Component } from '@angular/core';

import { CommonModule, NgIf } from '@angular/common'; // Required for dynamic styling like [style.transform]
import { ProfileDropdownComponent } from '../profile-dropdown-component/profile-dropdown-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true, // Ensure this is marked as standalone
  imports: [ProfileDropdownComponent, CommonModule,RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  
  isSidebarCollapsed = false;
  openMenus: { [key: string]: boolean } = {};

  menuItems = [
    {
      id: 'dash',
      label: 'Dashboard',
      icon: 'bi-speedometer2',
      link: '/dashboard',
      subItems: [
        { label: 'Analytics', link: '/dashboard/analytics' },
        { label: 'E-commerce', link: '/dashboard/shop' }
      ]
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: 'bi-cart3',
      link: '/orders',
      subItems: [
        { label: 'Recent', link: '/orders/recent' }
      ]
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: 'bi-people',
      link: '/customers',
      subItems: [
        { label: 'Analytics', link: '/customers/analytics' },
        { label: 'E-commerce', link: '/customers/shop' }
      ]
    },
    {
      id: 'products',
      label: 'Products',
      icon: 'bi-box-seam',
      link: '/products',
      subItems: [
        { label: 'Analytics', link: '/products/analytics' },
        { label: 'E-commerce', link: '/products/shop' }
      ]
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: 'bi-graph-up-arrow',
      link: '/reports',
      subItems: [
        { label: 'Analytics', link: '/reports/analytics' },
        { label: 'E-commerce', link: '/reports/shop' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'bi-gear',
      link: '/settings',
      subItems: [
        { label: 'Analytics', link: '/settings/analytics' },
        { label: 'E-commerce', link: '/settings/shop' }
      ]
    }
  ];

 toggleSidebar() {
  this.isSidebarCollapsed = !this.isSidebarCollapsed;
}

  toggleMenu(menuId: string) {
    // If sidebar is collapsed, expand it first when clicking a menu
    if (this.isSidebarCollapsed) {
      this.isSidebarCollapsed = false;
    }
    this.openMenus[menuId] = !this.openMenus[menuId];
  }

  // Closes sidebar on mobile after clicking a link
  closeOnMobile() {
    if (window.innerWidth <= 768) {
      this.isSidebarCollapsed = true;
    }
  }

}