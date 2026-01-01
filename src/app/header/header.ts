import { Component } from '@angular/core';

import { ProfileDropdownComponent } from '../profile-dropdown-component/profile-dropdown-component';
import { ThemeService } from '../theme';

@Component({
  selector: 'app-header',
  imports: [ProfileDropdownComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
constructor(public themeService: ThemeService) {}

}
