import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcederCompraComponent } from './proceder-compra.component';

describe('ProcederCompraComponent', () => {
  let component: ProcederCompraComponent;
  let fixture: ComponentFixture<ProcederCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcederCompraComponent]
    });
    fixture = TestBed.createComponent(ProcederCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
