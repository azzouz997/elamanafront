import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMyOrderComponent } from './info-my-order.component';

describe('InfoMyOrderComponent', () => {
  let component: InfoMyOrderComponent;
  let fixture: ComponentFixture<InfoMyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
