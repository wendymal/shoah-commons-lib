import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcdComponent } from './ucd.component';

describe('UcdComponent', () => {
  let component: UcdComponent;
  let fixture: ComponentFixture<UcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
