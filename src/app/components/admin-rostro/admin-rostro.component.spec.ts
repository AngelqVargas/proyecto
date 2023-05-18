import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRostroComponent } from './admin-rostro.component';

describe('AdminRostroComponent', () => {
  let component: AdminRostroComponent;
  let fixture: ComponentFixture<AdminRostroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRostroComponent]
    });
    fixture = TestBed.createComponent(AdminRostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
