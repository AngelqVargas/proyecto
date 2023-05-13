import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrilicoComponent } from './acrilico.component';

describe('AcrilicoComponent', () => {
  let component: AcrilicoComponent;
  let fixture: ComponentFixture<AcrilicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcrilicoComponent]
    });
    fixture = TestBed.createComponent(AcrilicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
