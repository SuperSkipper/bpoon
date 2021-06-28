import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MUSI2040PortfolioComponent } from './musi2040-portfolio.component';

describe('MUSI2040PortfolioComponent', () => {
  let component: MUSI2040PortfolioComponent;
  let fixture: ComponentFixture<MUSI2040PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MUSI2040PortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MUSI2040PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
