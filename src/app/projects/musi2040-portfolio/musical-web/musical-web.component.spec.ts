import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalWebComponent } from './musical-web.component';

describe('MusicalWebComponent', () => {
  let component: MusicalWebComponent;
  let fixture: ComponentFixture<MusicalWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
