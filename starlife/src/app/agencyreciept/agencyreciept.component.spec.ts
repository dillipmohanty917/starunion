import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyrecieptComponent } from './agencyreciept.component';

describe('AgencyrecieptComponent', () => {
  let component: AgencyrecieptComponent;
  let fixture: ComponentFixture<AgencyrecieptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyrecieptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyrecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
