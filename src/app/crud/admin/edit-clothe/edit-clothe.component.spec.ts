import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClotheComponent } from './edit-clothe.component';

describe('EditClotheComponent', () => {
  let component: EditClotheComponent;
  let fixture: ComponentFixture<EditClotheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClotheComponent]
    });
    fixture = TestBed.createComponent(EditClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
