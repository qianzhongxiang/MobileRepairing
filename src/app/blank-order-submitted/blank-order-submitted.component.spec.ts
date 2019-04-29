import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankOrderSubmittedComponent } from './blank-order-submitted.component';

describe('BlankOrderSubmittedComponent', () => {
  let component: BlankOrderSubmittedComponent;
  let fixture: ComponentFixture<BlankOrderSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankOrderSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankOrderSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
