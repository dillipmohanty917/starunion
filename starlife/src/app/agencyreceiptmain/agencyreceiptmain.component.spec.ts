import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyreceiptmainComponent } from './agencyreceiptmain.component';

describe('AgencyreceiptmainComponent', () => {
  let component: AgencyreceiptmainComponent;
  let fixture: ComponentFixture<AgencyreceiptmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyreceiptmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyreceiptmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
