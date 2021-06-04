import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueProductComponent } from './historique-product.component';

describe('HistoriqueProductComponent', () => {
  let component: HistoriqueProductComponent;
  let fixture: ComponentFixture<HistoriqueProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
