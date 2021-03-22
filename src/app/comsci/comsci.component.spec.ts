import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComsciComponent } from './comsci.component';

describe('ComsciComponent', () => {
  let component: ComsciComponent;
  let fixture: ComponentFixture<ComsciComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
