import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategorylistComponent } from './categorylist.component';

describe('CategorylistComponent', () => {
  let component: CategorylistComponent;
  let fixture: ComponentFixture<CategorylistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
