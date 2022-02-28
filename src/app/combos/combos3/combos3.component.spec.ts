import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combos3Component } from './combos3.component';

describe('Combos3Component', () => {
  let component: Combos3Component;
  let fixture: ComponentFixture<Combos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Combos3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Combos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
