import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropositionComponent } from './add-proposition.component';

describe('AddPropositionComponent', () => {
  let component: AddPropositionComponent;
  let fixture: ComponentFixture<AddPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
