import { Component, HostListener, OnInit } from '@angular/core';

import { CommonModule, NgIf } from '@angular/common'; // Required for dynamic styling like [style.transform]
import { ProfileDropdownComponent } from '../profile-dropdown-component/profile-dropdown-component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true, // Ensure this is marked as standalone
  imports: [ProfileDropdownComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {
  
  isSidebarCollapsed = false;
  openMenus: { [key: string]: boolean } = {};

  menuItems = [
  
    {
      id: 'orders',
      label: 'طلبات الإدارات',
      icon: 'bi-building',
      link: '/orders',
      subItems: [
        { label: 'طلب أموال إضافية', link: '/orders/recent' },
        { label: 'طلب موافقة شراء كاميرات', link: '/orders/recent' }
      ]
    },
    {
      id: 'orders1',
      label: 'طلبات المستودع',
      icon: 'bi-cart3',
      link: '/orders',
      subItems: [
        { label: 'طلب أموال إضافية', link: '/orders/recent' },
        { label: 'طلب موافقة شراء كاميرات', link: '/orders/recent' }
      ]
    },
    {
      id: 'customers',
      label: 'العملاء',
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

  ngOnInit() {
    // Collapse sidebar by default on mobile (<= 768px)
    this.isSidebarCollapsed = window.innerWidth <= 768;
  }

  // Listen to window resize to automatically collapse/expand sidebar on mobile/desktop
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width <= 468 && !this.isSidebarCollapsed) {
      this.isSidebarCollapsed = true;
    } else if (width > 468 && this.isSidebarCollapsed) {
      this.isSidebarCollapsed = false;
    }
  }

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