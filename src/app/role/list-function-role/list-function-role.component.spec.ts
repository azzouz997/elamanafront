import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFunctionRoleComponent } from './list-function-role.component';

describe('ListFunctionRoleComponent', () => {
  let component: ListFunctionRoleComponent;
  let fixture: ComponentFixture<ListFunctionRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFunctionRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFunctionRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
