import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [NgClass, CommonModule, FormsModule]
})
export class OrdersTableComponent {

  data = [
    {
      ref: 'BDRS/2016/019/0008',
      title: 'توريد أجهزة مواد',
      products: 5,
      notes: 5,
      status: 'مقبول',
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
      status: 'تحت الإجراء',
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
      status: 'تم الإنشاء',
      statusClass: 'bg-info-subtle text-info',
      user: 'جاسم محمد أحمد',
      email: 'jassem@moi.gov.qa',
      date: '24 يناير 2025',
      selected: false
    }
  ];

  selectRow(row: any) {
    row.selected = !row.selected;
  }

  toggleAll(event: any) {
    const checked = event.target.checked;
    this.data.forEach(r => r.selected = checked);
  }
}
