import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRostroComponent } from './form-rostro.component';

describe('FormRostroComponent', () => {
  let component: FormRostroComponent;
  let fixture: ComponentFixture<FormRostroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRostroComponent]
    });
    fixture = TestBed.createComponent(FormRostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
