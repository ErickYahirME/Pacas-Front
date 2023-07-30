import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheComponent } from './clothe.component';

describe('ClotheComponent', () => {
  let component: ClotheComponent;
  let fixture: ComponentFixture<ClotheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClotheComponent]
    });
    fixture = TestBed.createComponent(ClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
