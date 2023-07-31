import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificClotheComponent } from './modific-clothe.component';

describe('ModificClotheComponent', () => {
  let component: ModificClotheComponent;
  let fixture: ComponentFixture<ModificClotheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificClotheComponent]
    });
    fixture = TestBed.createComponent(ModificClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
