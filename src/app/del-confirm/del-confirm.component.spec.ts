import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelConfirmComponent } from './del-confirm.component';

describe('DelConfirmComponent', () => {
  let component: DelConfirmComponent;
  let fixture: ComponentFixture<DelConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
