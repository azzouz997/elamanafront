import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePropositionComponent } from './historique-proposition.component';

describe('HistoriquePropositionComponent', () => {
  let component: HistoriquePropositionComponent;
  let fixture: ComponentFixture<HistoriquePropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquePropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
