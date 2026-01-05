import { 
  Component, 
  HostListener, 
  OnInit, 
  Inject, 
  PLATFORM_ID 
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ProfileDropdownComponent } from '../profile-dropdown-component/profile-dropdown-component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ProfileDropdownComponent],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarCollapsed = false;
  openMenus: { [key: string]: boolean } = {};
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  menuItems = [
    {
      id: 'orders',
      label: 'طلبات الإدارات',
      icon: 'bi-building',
      subItems: [
        { label: 'طلب أموال إضافية', link: '/orders/recent' },
        { label: 'طلب موافقة شراء كاميرات', link: '/orders/recent' }
      ]
    },
    {
      id: 'orders1',
      label: 'طلبات المستودع',
      icon: 'bi-cart3',
      subItems: [
        { label: 'طلب أموال إضافية', link: '/orders/recent' },
        { label: 'طلب موافقة شراء كاميرات', link: '/orders/recent' }
      ]
    }
  ];

  ngOnInit() {
    if (this.isBrowser) {
      this.isSidebarCollapsed = window.innerWidth <= 768;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser) return;

    const width = window.innerWidth;

    if (width <= 768) {
      this.isSidebarCollapsed = true;
    } else {
      this.isSidebarCollapsed = false;
    }
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleMenu(menuId: string) {
    if (this.isSidebarCollapsed && this.isBrowser) {
      this.isSidebarCollapsed = false;
    }
    this.openMenus[menuId] = !this.openMenus[menuId];
  }

  closeOnMobile() {
    if (this.isBrowser && window.innerWidth <= 768) {
      this.isSidebarCollapsed = true;
    }
  }
}
