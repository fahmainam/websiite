import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphOne } from './graph-one';

describe('GraphOne', () => {
  let component: GraphOne;
  let fixture: ComponentFixture<GraphOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
