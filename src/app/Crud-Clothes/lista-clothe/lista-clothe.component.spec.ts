import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClotheComponent } from './lista-clothe.component';

describe('ListaClotheComponent', () => {
  let component: ListaClotheComponent;
  let fixture: ComponentFixture<ListaClotheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaClotheComponent]
    });
    fixture = TestBed.createComponent(ListaClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
