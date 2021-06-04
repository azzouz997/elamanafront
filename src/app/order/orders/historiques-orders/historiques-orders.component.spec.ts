import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquesOrdersComponent } from './historiques-orders.component';

describe('HistoriquesOrdersComponent', () => {
  let component: HistoriquesOrdersComponent;
  let fixture: ComponentFixture<HistoriquesOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquesOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
