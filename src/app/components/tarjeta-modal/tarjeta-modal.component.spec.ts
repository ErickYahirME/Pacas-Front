import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaModalComponent } from './tarjeta-modal.component';

describe('TarjetaModalComponent', () => {
  let component: TarjetaModalComponent;
  let fixture: ComponentFixture<TarjetaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaModalComponent]
    });
    fixture = TestBed.createComponent(TarjetaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
