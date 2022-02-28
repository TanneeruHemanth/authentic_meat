import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combos1Component } from './combos1.component';

describe('Combos1Component', () => {
  let component: Combos1Component;
  let fixture: ComponentFixture<Combos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Combos1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Combos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
