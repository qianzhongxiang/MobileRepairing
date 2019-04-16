import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormStoreComponent } from './order-form-store.component';

describe('OrderFormStoreComponent', () => {
  let component: OrderFormStoreComponent;
  let fixture: ComponentFixture<OrderFormStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
