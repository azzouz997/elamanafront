import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueUserComponent } from './historique-user.component';

describe('HistoriqueUserComponent', () => {
  let component: HistoriqueUserComponent;
  let fixture: ComponentFixture<HistoriqueUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
