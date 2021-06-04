import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPropositionComponent } from './detail-proposition.component';

describe('DetailPropositionComponent', () => {
  let component: DetailPropositionComponent;
  let fixture: ComponentFixture<DetailPropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPropositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
