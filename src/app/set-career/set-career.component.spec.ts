import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCareerComponent } from './set-career.component';

describe('SetCareerComponent', () => {
  let component: SetCareerComponent;
  let fixture: ComponentFixture<SetCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
