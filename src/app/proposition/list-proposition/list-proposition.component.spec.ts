import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropositionComponent } from './list-proposition.component';

describe('ListPropositionComponent', () => {
  let component: ListPropositionComponent;
  let fixture: ComponentFixture<ListPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
