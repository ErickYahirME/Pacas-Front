import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSizeComponent } from './show-size.component';

describe('ShowSizeComponent', () => {
  let component: ShowSizeComponent;
  let fixture: ComponentFixture<ShowSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSizeComponent]
    });
    fixture = TestBed.createComponent(ShowSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
