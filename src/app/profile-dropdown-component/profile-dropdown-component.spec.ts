import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropdownComponent } from './profile-dropdown-component';

describe('ProfileDropdown', () => {
  let component: ProfileDropdownComponent;
  let fixture: ComponentFixture<ProfileDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDropdownComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
