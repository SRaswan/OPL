import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessoncardComponent } from './lessoncard.component';

describe('LessoncardComponent', () => {
  let component: LessoncardComponent;
  let fixture: ComponentFixture<LessoncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessoncardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessoncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
