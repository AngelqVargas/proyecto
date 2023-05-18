import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabelloComponent } from './admin-cabello.component';

describe('AdminCabelloComponent', () => {
  let component: AdminCabelloComponent;
  let fixture: ComponentFixture<AdminCabelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCabelloComponent]
    });
    fixture = TestBed.createComponent(AdminCabelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
