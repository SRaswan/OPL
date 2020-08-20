import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Category, SubCategory, Lesson } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';
import { ActivatedRoute, Router } from '@angular/router';

import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-lessonlist',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css']
})
export class LessonlistComponent implements OnInit {
   // categories: Category[];
   top_lessons: Lesson[];
   lessons: Lesson[];
   subcategories: SubCategory[];
   sub_category_id: string;
   category_id: string;
   private observable_param: any = null;
   private observable_lessons: any = null;

  @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;


  constructor(private sidebarlinkService: SidebarlinkService,
                  private route: ActivatedRoute,
                  public router: Router) { }

  ngOnInit() {
      this.observable_param = this.route.queryParams.subscribe(params => {
          this.sub_category_id = params['sub_category_id'];
          this.category_id = params['category_id'];
      });

      // this.getCategories();
      if (this.sub_category_id == undefined || this.sub_category_id == undefined) {
         this.getTopLessons();
      } else {
         this.getLessons();
      }
  }

  // getCategories(): void {
  //   this.sidebarlinkService.getCategories()
  //             .subscribe(categories => this.categories = categories);
  // }

  getTopLessons(): void {
    this.observable_lessons = this.sidebarlinkService.getTopLessons()
              .subscribe(top_lessons => this.top_lessons = top_lessons);
  }

  getLessons(): void {
     this.observable_lessons = this.sidebarlinkService.getLessons(this.category_id, this.sub_category_id)
               .subscribe(top_lessons => this.top_lessons = top_lessons);
   }

   ngOnDestroy() {
      if (this.observable_param != null)
         this.observable_param.unsubscribe();
      if (this.observable_lessons != null)
         this.observable_lessons.unsubscribe();

   }

  // onReady(event: YT.PlayerEvent) {
  //   event.target.playVideo();
  // }

  // onStateChange(event: YT.OnStateChangeEvent) {
  //    if (event.data === YT.PlayerState.CUED) {
  //       event.target.playVideo();
  //    }
  // }


}
