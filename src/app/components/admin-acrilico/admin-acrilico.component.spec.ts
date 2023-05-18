import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcrilicoComponent } from './admin-acrilico.component';

describe('AdminAcrilicoComponent', () => {
  let component: AdminAcrilicoComponent;
  let fixture: ComponentFixture<AdminAcrilicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAcrilicoComponent]
    });
    fixture = TestBed.createComponent(AdminAcrilicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
