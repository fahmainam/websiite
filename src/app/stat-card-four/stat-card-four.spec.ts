import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardFour } from './stat-card-four';

describe('StatCardFour', () => {
  let component: StatCardFour;
  let fixture: ComponentFixture<StatCardFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCardFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCardFour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
