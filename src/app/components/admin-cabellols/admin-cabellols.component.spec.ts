import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabellolsComponent } from './admin-cabellols.component';

describe('AdminCabellolsComponent', () => {
  let component: AdminCabellolsComponent;
  let fixture: ComponentFixture<AdminCabellolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCabellolsComponent]
    });
    fixture = TestBed.createComponent(AdminCabellolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
