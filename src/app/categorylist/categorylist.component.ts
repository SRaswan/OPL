import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Category, SubCategory, Lesson } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
   categories: Category[];
   // top_lessons: Lesson[];
   // lessons: Lesson[];
   subcategories: SubCategory[];
   sub_category_id: string;
   category_id: string;

   cardcolors: string[] = ["primary", "secondary", "info", "warning", "success", "secondary", "light", "dark"];
   cardicons: string[] = ["fa-laptop", "fa-globe", "fa-calculator", "fa-music", "fa-flask","fa-cogs"];

   private sub: any;
   private sub_cat: any;

  constructor(private sidebarlinkService: SidebarlinkService,
               private route: ActivatedRoute,
               public router: Router) { }

  ngOnInit(): void {
     this.sub = this.route.queryParams.subscribe(params => {
        this.sub_category_id = params['sub_category_id'];
        this.category_id = params['category_id'];
      });

     this.getCategories();
     // this.getTopLessons();
     // this.getLessons();
    }

  getCategories(): void {
    this.sub_cat = this.sidebarlinkService.getCategories()
              .subscribe(categories => this.categories = categories);
  }

  // getTopLessons(): void {
  //   this.sidebarlinkService.getTopLessons()
  //             .subscribe(top_lessons => this.top_lessons = top_lessons);
  // }
  //
  // getLessons(): void {
  //    this.sidebarlinkService.getLessons(this.category_id, this.sub_category_id)
  //              .subscribe(top_lessons => this.top_lessons = top_lessons);
  //  }

   ngOnDestroy() {
      this.sub.unsubscribe();
      this.sub_cat.unsubscribe();
   }
}
