import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combos2Component } from './combos2.component';

describe('Combos2Component', () => {
  let component: Combos2Component;
  let fixture: ComponentFixture<Combos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Combos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Combos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
