import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardTwo } from './stat-card-two';

describe('StatCardTwo', () => {
  let component: StatCardTwo;
  let fixture: ComponentFixture<StatCardTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCardTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
