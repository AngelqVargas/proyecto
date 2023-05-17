import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCabelloComponent } from './form-cabello.component';

describe('FormCabelloComponent', () => {
  let component: FormCabelloComponent;
  let fixture: ComponentFixture<FormCabelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCabelloComponent]
    });
    fixture = TestBed.createComponent(FormCabelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
