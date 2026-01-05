import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { StatCardOne } from '../stat-card-one/stat-card-one';
import { GraphOne } from '../graph-one/graph-one';
import { Table } from '../table/table';
import { Tabs } from '../tabs.component/tabs.component';
import { BarChartComponent } from '../bar-chart/bar-chart';
import { ChartContainerComponent } from "../chart-container/chart-container";
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [
    CommonModule,
    GraphOne,
    Table,
    Tabs,
    BarChartComponent,
    ChartContainerComponent
],
  templateUrl: './mainbody.html',
  styleUrls: ['./mainbody.css']
})
export class Mainbody {

@ViewChild('chartCanvas') canvas!: ElementRef<HTMLCanvasElement>;


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


  tabname = 'لوحة القيادة';     
  tab1name = 'المشتريات';
  tab2name = 'العهد';
  tab3name = 'الطلبات';
  tab4name = 'الفواتير';
  tab5name = 'الموازنة';
  tab6name = '+';

  selectedFilter: 'ALL' | 'ACCEPTED' | 'REJECTED' = 'ALL';

  orders = [
    {
      id: 'BDRS/2016/019/0008',
      title: 'توريد أجهزة مودم',
      products: '5 منتجات',
      notes: '05',
      status: 'ACCEPTED',
      statusLabel: 'مقبول',
      name: 'فارس أسامة طارق',
      email: 'farestarek@moi.gov.qa',
      date: '22 يناير 2025'
    },
    {
      id: 'BDRS/2016/019/0009',
      title: 'تجديد تراخيص',
      products: '5 منتجات',
      notes: '02',
      status: 'REJECTED',
      statusLabel: 'مرفوض',
      name: 'حامد هادي نعيم',
      email: 'hamedzalim@moi.gov.qa',
      date: '20 يناير 2025'
    }
  ];

  get filteredOrders() {
    if (this.selectedFilter === 'ALL') return this.orders;
    return this.orders.filter(o => o.status === this.selectedFilter);
  }

  setFilter(filter: 'ALL' | 'ACCEPTED' | 'REJECTED') {
    this.selectedFilter = filter;
  }
}

