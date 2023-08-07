import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudClotheComponent } from './crud-clothe.component';

describe('CrudClotheComponent', () => {
  let component: CrudClotheComponent;
  let fixture: ComponentFixture<CrudClotheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudClotheComponent]
    });
    fixture = TestBed.createComponent(CrudClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
