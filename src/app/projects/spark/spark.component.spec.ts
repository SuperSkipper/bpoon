import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SParkComponent } from './spark.component';

describe('SParkComponent', () => {
  let component: SParkComponent;
  let fixture: ComponentFixture<SParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
