import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agencyreciept2Component } from './agencyreciept2.component';

describe('Agencyreciept2Component', () => {
  let component: Agencyreciept2Component;
  let fixture: ComponentFixture<Agencyreciept2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Agencyreciept2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agencyreciept2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
