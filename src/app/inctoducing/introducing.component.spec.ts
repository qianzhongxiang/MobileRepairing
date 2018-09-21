import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducingComponent } from './introducing.component';

describe('InctoducingComponent', () => {
  let component: IntroducingComponent;
  let fixture: ComponentFixture<IntroducingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroducingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
