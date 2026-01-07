import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [NgClass, CommonModule, FormsModule]
})
export class OrdersTableComponent {

  selectedStatus: string = 'all';

  data = [
    {
      ref: 'BDRS/2016/019/0008',
      title: 'توريد أجهزة مواد',
      products: 5,
      notes: 5,
      status: 'مقبول',
      statusKey: 'accepted',
      statusClass: 'bg-success-subtle text-success',
      user: 'فارس أسامة طارق',
      email: 'farestarik@moi.gov.qa',
      date: '22 يناير 2025',
      selected: false
    },
    {
      ref: 'BDRS/2016/019/0009',
      title: 'تجديد تراخيص',
      products: 5,
      notes: 2,
      status: 'قيد المعالجة',
      statusKey: 'processing',
      statusClass: 'bg-warning-subtle text-warning',
      user: 'حامد هادي نجم',
      email: 'hamedn@moi.gov.qa',
      date: '20 يناير 2025',
      selected: false
    },
    {
      ref: 'BDRS/2016/019/0010',
      title: 'ترقية وتحديث تكنولوجيا',
      products: 5,
      notes: 8,
      status: 'مرفوض',
      statusKey: 'rejected',
      statusClass: 'bg-danger-subtle text-danger',
      user: 'جاسم محمد أحمد',
      email: 'jassem@moi.gov.qa',
      date: '24 يناير 2025',
      selected: false
    }
  ];

  filteredData = [...this.data];

  // ✅ STATUS FILTER
  filterByStatus(status: string) {
    this.selectedStatus = status;

    this.filteredData =
      status === 'all'
        ? [...this.data]
        : this.data.filter(row => row.statusKey === status);
  }

  // ✅ ROW SELECTION
  selectRow(row: any) {
    row.selected = !row.selected;
  }

  // ✅ SELECT ALL
  toggleAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.filteredData.forEach(r => r.selected = checked);
  }
}
