import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcrilicoComponent } from './form-acrilico.component';

describe('FormAcrilicoComponent', () => {
  let component: FormAcrilicoComponent;
  let fixture: ComponentFixture<FormAcrilicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAcrilicoComponent]
    });
    fixture = TestBed.createComponent(FormAcrilicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
