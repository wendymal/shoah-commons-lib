import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoahCommonsComponent } from './shoah-commons.component';

describe('ShoahCommonsComponent', () => {
  let component: ShoahCommonsComponent;
  let fixture: ComponentFixture<ShoahCommonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoahCommonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoahCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
