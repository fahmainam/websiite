import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-dropdown-component.html',
  styleUrls: ['./profile-dropdown-component.css']
})
export class ProfileDropdownComponent {
  // Receive the state from the parent sidebar component
  @Input() isCollapsed = false; 

  isOpen = false;

  user = {
    name: 'محمد عبد الله',
    department: 'قسم المالية',
    mobile: '0501234567',
    email: 'mohammed@example.com',
    age: 29,
    image: 'https://ui-avatars.com/api/?name=Mohammad&background=0D8ABC&color=fff'
  };

  toggle() {
    this.isOpen = !this.isOpen;
  }

  editProfile() { alert('تعديل الملف'); }
  logout() { alert('تسجيل الخروج'); }
}