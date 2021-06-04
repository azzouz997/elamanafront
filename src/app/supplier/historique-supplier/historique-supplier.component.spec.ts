import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueSupplierComponent } from './historique-supplier.component';

describe('HistoriqueSupplierComponent', () => {
  let component: HistoriqueSupplierComponent;
  let fixture: ComponentFixture<HistoriqueSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
