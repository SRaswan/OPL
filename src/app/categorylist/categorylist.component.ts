import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Category, SubCategory, Lesson } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
   categories: Category[];
   top_lessons: Lesson[];

  constructor(private sidebarlinkService: SidebarlinkService) { }

  ngOnInit(): void {
     this.getCategories();
     this.getTopLessons();
  }

  getCategories(): void {
    this.sidebarlinkService.getCategories()
              .subscribe(categories => this.categories = categories);
  }

  getTopLessons(): void {
    this.sidebarlinkService.getTopLessons()
              .subscribe(top_lessons => this.top_lessons = top_lessons);
  }

}
