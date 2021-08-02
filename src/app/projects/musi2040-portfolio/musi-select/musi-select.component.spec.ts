import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiSelectComponent } from './musi-select.component';

describe('MusiSelectComponent', () => {
  let component: MusiSelectComponent;
  let fixture: ComponentFixture<MusiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
