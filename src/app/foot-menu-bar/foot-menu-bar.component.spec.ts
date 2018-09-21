import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootMenuBarComponent } from './foot-menu-bar.component';

describe('FootMenuBarComponent', () => {
  let component: FootMenuBarComponent;
  let fixture: ComponentFixture<FootMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
