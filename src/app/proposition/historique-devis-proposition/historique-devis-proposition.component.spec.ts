import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDevisPropositionComponent } from './historique-devis-proposition.component';

describe('HistoriqueDevisPropositionComponent', () => {
  let component: HistoriqueDevisPropositionComponent;
  let fixture: ComponentFixture<HistoriqueDevisPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueDevisPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueDevisPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
