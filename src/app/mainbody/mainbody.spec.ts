import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainbody } from './mainbody';

describe('Mainbody', () => {
  let component: Mainbody;
  let fixture: ComponentFixture<Mainbody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainbody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainbody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
