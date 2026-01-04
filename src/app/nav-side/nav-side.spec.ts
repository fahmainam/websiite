import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSide } from './nav-side';

describe('NavSide', () => {
  let component: NavSide;
  let fixture: ComponentFixture<NavSide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
