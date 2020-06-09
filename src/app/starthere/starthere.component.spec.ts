import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarthereComponent } from './starthere.component';

describe('StarthereComponent', () => {
  let component: StarthereComponent;
  let fixture: ComponentFixture<StarthereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarthereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarthereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
