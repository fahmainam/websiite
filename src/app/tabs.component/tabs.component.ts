import { Component, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { StatCardOne } from '../stat-card-one/stat-card-one';

type Tab = {
  id: string;
  title: string;
  content: string;
  closable: boolean;
};

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule,StatCardOne],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class Tabs {

  // ---------- DATA ----------
  statsCards = [
  {
    label: 'إجمالي المعاملات',
    amount: '10.5 مليون ',
    icon: 'bi-cash-stack', // Cash icon
    trendValue: '12%',
    trendDirection: 'up' as const,
    period: 'من الشهر الماضي'
  },
  {
    label: 'الفواتير المدفوعة',
    amount: '8,420',
    icon: 'bi-check-circle', // Success icon
    trendValue: '5%',
    trendDirection: 'up' as const,
    period: 'من الأسبوع الماضي'
  },
  {
    label: 'طلبات قيد الانتظار',
    amount: '142',
    icon: 'bi-clock-history', // Pending icon
    trendValue: '8%',
    trendDirection: 'down' as const,
    period: 'من يوم أمس'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '1,250',
    icon: 'bi-people', // Users icon
    trendValue: '18%',
    trendDirection: 'up' as const,
    period: 'منذ العام الماضي'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '2,250',
    icon: 'bi-people', // Users icon
    trendValue: '10%',
    trendDirection: 'down' as const,
    period: 'منذ العام الماضي'
  },
    {
    label: 'إجمالي المعاملات',
    amount: '10.5 مليون ',
    icon: 'bi-cash-stack', // Cash icon
    trendValue: '12%',
    trendDirection: 'up' as const,
    period: 'من الشهر الماضي'
  },
  {
    label: 'الفواتير المدفوعة',
    amount: '8,420',
    icon: 'bi-check-circle', // Success icon
    trendValue: '5%',
    trendDirection: 'up' as const,
    period: 'من الأسبوع الماضي'
  },
  {
    label: 'طلبات قيد الانتظار',
    amount: '142',
    icon: 'bi-clock-history', // Pending icon
    trendValue: '8%',
    trendDirection: 'down' as const,
    period: 'من يوم أمس'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '1,250',
    icon: 'bi-people', // Users icon
    trendValue: '18%',
    trendDirection: 'up' as const,
    period: 'منذ العام الماضي'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '2,250',
    icon: 'bi-people', // Users icon
    trendValue: '10%',
    trendDirection: 'down' as const,
    period: 'منذ العام الماضي'
  }
  ];

  // ---------- SIGNALS ----------
  activeTabId = signal<string>('home');

  tabs = signal<Tab[]>([
    { id: 'home', title: 'الرئيسية', content: 'home-content', closable: false },
    { id: 'profile', title: 'أعمالي', content: 'table-content', closable: true }
  ]);

  tabToDelete = signal<Tab | null>(null);

  // ---------- METHODS ----------
  addNewTab() {
    const index = this.tabs().length + 1;
    const newTab: Tab = {
      id: `tab-${index}`,
      title: `طلب جديد ${index}`,
      content: 'default-content',
      closable: true
    };

    this.tabs.update(tabs => [...tabs, newTab]);
    this.activeTabId.set(newTab.id);
  }

  setActiveTab(id: string) {
    this.activeTabId.set(id);
  }

  requestCloseTab(event: MouseEvent, tab: Tab) {
    event.stopPropagation();
    if (!tab.closable) return;
    this.tabToDelete.set(tab);
  }

  confirmClose() {
    const tab = this.tabToDelete();
    if (!tab) return;

    const tabs = this.tabs();
    const index = tabs.findIndex(t => t.id === tab.id);

    this.tabs.set(tabs.filter(t => t.id !== tab.id));

    if (this.activeTabId() === tab.id) {
      const next = tabs[index + 1] || tabs[index - 1];
      this.activeTabId.set(next.id);
    }

    this.tabToDelete.set(null);
  }

  cancelClose() {
    this.tabToDelete.set(null);
  }
}
