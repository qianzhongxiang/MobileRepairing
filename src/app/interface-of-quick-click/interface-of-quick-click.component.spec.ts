import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceOfQuickClickComponent } from './interface-of-quick-click.component';

describe('InterfaceOfQuickClickComponent', () => {
  let component: InterfaceOfQuickClickComponent;
  let fixture: ComponentFixture<InterfaceOfQuickClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceOfQuickClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceOfQuickClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
