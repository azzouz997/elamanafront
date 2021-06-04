import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyOrderComponent } from './add-my-order.component';

describe('AddMyOrderComponent', () => {
  let component: AddMyOrderComponent;
  let fixture: ComponentFixture<AddMyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
