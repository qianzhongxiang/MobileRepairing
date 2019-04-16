import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRepairingComponent } from './book-repairing.component';

describe('BookRepairingComponent', () => {
  let component: BookRepairingComponent;
  let fixture: ComponentFixture<BookRepairingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRepairingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRepairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
