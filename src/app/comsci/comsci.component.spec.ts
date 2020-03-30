import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsciComponent } from './comsci.component';

describe('ComsciComponent', () => {
  let component: ComsciComponent;
  let fixture: ComponentFixture<ComsciComponent>;

  beforeEach(async(() => {
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
