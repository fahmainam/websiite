import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardThree } from './stat-card-three';

describe('StatCardThree', () => {
  let component: StatCardThree;
  let fixture: ComponentFixture<StatCardThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCardThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
