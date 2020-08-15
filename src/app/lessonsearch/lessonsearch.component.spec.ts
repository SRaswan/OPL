import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsearchComponent } from './lessonsearch.component';

describe('LessonsearchComponent', () => {
  let component: LessonsearchComponent;
  let fixture: ComponentFixture<LessonsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
