import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevisPropositionComponent } from './edit-devis-proposition.component';

describe('EditDevisPropositionComponent', () => {
  let component: EditDevisPropositionComponent;
  let fixture: ComponentFixture<EditDevisPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDevisPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDevisPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
