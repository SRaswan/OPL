import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScienceComponent } from './science.component';

describe('ScienceComponent', () => {
  let component: ScienceComponent;
  let fixture: ComponentFixture<ScienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
