import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenereComponent } from './edit-genere.component';

describe('EditGenereComponent', () => {
  let component: EditGenereComponent;
  let fixture: ComponentFixture<EditGenereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGenereComponent]
    });
    fixture = TestBed.createComponent(EditGenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
