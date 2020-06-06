import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpoonComponent } from './bpoon.component';

describe('BpoonComponent', () => {
  let component: BpoonComponent;
  let fixture: ComponentFixture<BpoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
