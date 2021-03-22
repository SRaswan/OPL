import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LessonlistComponent } from './lessonlist.component';

describe('LessonlistComponent', () => {
  let component: LessonlistComponent;
  let fixture: ComponentFixture<LessonlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
