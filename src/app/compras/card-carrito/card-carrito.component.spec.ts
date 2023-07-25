import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarritoComponent } from './card-carrito.component';

describe('CardCarritoComponent', () => {
  let component: CardCarritoComponent;
  let fixture: ComponentFixture<CardCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCarritoComponent]
    });
    fixture = TestBed.createComponent(CardCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
