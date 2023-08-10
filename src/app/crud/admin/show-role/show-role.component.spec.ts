import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoleComponent } from './show-role.component';

describe('ShowRoleComponent', () => {
  let component: ShowRoleComponent;
  let fixture: ComponentFixture<ShowRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRoleComponent]
    });
    fixture = TestBed.createComponent(ShowRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
