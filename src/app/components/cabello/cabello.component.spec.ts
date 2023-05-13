import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelloComponent } from './cabello.component';

describe('CabelloComponent', () => {
  let component: CabelloComponent;
  let fixture: ComponentFixture<CabelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabelloComponent]
    });
    fixture = TestBed.createComponent(CabelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
