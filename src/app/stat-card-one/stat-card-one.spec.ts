import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardOne } from './stat-card-one';

describe('StatCardOne', () => {
  let component: StatCardOne;
  let fixture: ComponentFixture<StatCardOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCardOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
