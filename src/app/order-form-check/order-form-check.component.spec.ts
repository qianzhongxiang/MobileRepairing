import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormCheckComponent } from './order-form-check.component';

describe('OrderFormCheckComponent', () => {
  let component: OrderFormCheckComponent;
  let fixture: ComponentFixture<OrderFormCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
