import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {

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
    if (this.selectedFilter === 'ALL') {
      return this.orders;
    }
    return this.orders.filter(
      order => order.status === this.selectedFilter
    );
  }

  setFilter(filter: 'ALL' | 'ACCEPTED' | 'REJECTED') {
    this.selectedFilter = filter;
  }
}




export class Mainbody {
  

 filteredOrders: any[] = [];
  allOrders: any[] = []; // Your full orders data
  currentFilter: string = 'ALL';

  constructor() {
    // Initialize with your orders data
    this.allOrders = [
      // ... your order objects
    ];
    this.applyFilter();
  }

  setFilter(filterType: string): void {
    this.currentFilter = filterType;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (this.currentFilter === 'ALL') {
      this.filteredOrders = this.allOrders;
    } else {
      this.filteredOrders = this.allOrders.filter(
        order => order.status === this.currentFilter
      );
    }
  }
}
