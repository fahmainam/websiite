import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProfileDropdownComponent } from '../profile-dropdown-component/profile-dropdown-component';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  link?: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './nav-side.html',
  styleUrls: ['./nav-side.css'],
  imports: [CommonModule, RouterLink, RouterLinkActive, ProfileDropdownComponent, NgClass]
})
export class SidebarComponent {

  // Sidebar collapse toggle
  isCollapsed = signal(false);

  // Track open accordions
  openMenus = signal<{ [key: string]: boolean }>({});

  // User info
  userName = 'محمد عبد الله';
  userRole = 'ادارة تطوير الانظمة';

  // Search input (you can bind this)
  searchTerm = '';

  // Menu structure
  menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'الصفحة الرئيسية',
      icon: 'bi-house-door',
      link: '/dashboard'
    },
    {
      id: 'orders',
      label: 'الطلبات',
      icon: 'bi-stack',
      subItems: [
        {
          id: 'dept-orders',
          label: 'طلبات الادارات',
          icon: 'bi-building',
          subItems: [
            { id: 'extra-funds', label: 'طلب اموال اضافية', icon: 'bi-coin', link: '/orders/extra-funds' },
            { id: 'camera-approval', label: 'طلب موافقة شراء كاميرات', icon: 'bi-camera', link: '/orders/camera-approval' },
            { id: 'central-recommendations', label: 'توصيات البنود المركزية', icon: 'bi-link-45deg', link: '/orders/central-recommendations' },
            { id: 'budget-proposals', label: 'مقترحات الادارات للموازنة', icon: 'bi-file-text', link: '/orders/budget-proposals' }
          ]
        },
        {
          id: 'store-orders',
          label: 'طلبات المستودع',
          icon: 'bi-cart3',
          subItems: [
            { id: 'consumption', label: 'الاستهلاكية/التموينية', icon: 'bi-box-seam', link: '/store/consumption' },
            { id: 'new-appointment', label: 'طلب عهدة جديد', icon: 'bi-check2-square', link: '/store/new-appointment' },
            { id: 'appointment-procedures', label: 'إجراءات العهد', icon: 'bi-check2', link: '/store/appointment-procedures' },
            { id: 'clothes-orders', label: 'طلبات الملابس', icon: 'bi-bag', link: '/store/clothes-orders', }
          ]
        }
      ]
    },
    {
      id: 'maintenance',
      label: 'طلب صيانة',
      icon: 'bi-tools',
      link: '/maintenance'
    },
    {
      id: 'inquiries',
      label: 'الاستعلامات',
      icon: 'bi-question-circle',
      link: '/inquiries'
    },
    {
      id: 'supplies',
      label: 'المستودعات',
      icon: 'bi-boxes',
      link: '/supplies'
    },
    {
      id: 'accounting',
      label: 'المحاسبة',
      icon: 'bi-journal',
      link: '/accounting'
    },
    {
      id: 'purchases',
      label: 'المشتريات',
      icon: 'bi-bag-check',
      link: '/purchases'
    }
  ];

  // Toggle menu open/close state
  toggleMenu(id: string) {
    this.openMenus.update(state => ({
      ...state,
      [id]: !state[id]
    }));
  }

  // Check if menu is open
  isOpen(id: string): boolean {
    return !!this.openMenus()[id];
  }

  // Collapse/expand sidebar
  toggleSidebar() {
    this.isCollapsed.update(val => !val);
  }
}
