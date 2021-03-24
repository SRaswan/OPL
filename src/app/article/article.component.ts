import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { ArticleData } from '../articleData.ts.OK_TO_DELETE'
// import { ArticleService } from '../article.service.ts.OK_TO_DELETE'
import { YouTubePlayer } from '@angular/youtube-player';
import { Category, SubCategory, Lesson, LessonState } from '../models/allmodels';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router, ParamMap, NavigationStart } from '@angular/router';
import { map, catchError, filter } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    // articledata: ArticleData;
    youtubevideoid: string;
    @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;
    // lesson_observe$: Observable<Lesson>;
    lesson: Lesson;
    navigationId: string;
    state$: Observable<object>;
    // obj: Object;

  	// private _menu: string = '';

  	// @Input()
  	// 	set menu(menuString: string) {
  	// 		this._menu = menuString;
  	// }
    //
  	// get menu(): string { return this._menu; }

  	constructor(
                public activatedRoute: ActivatedRoute,
                public router: Router) { }

  	ngOnInit() {
      // this.lesson$ = this.activatedRoute.paramMap.pipe(() => window.history.state)
      this.getLesson()

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // this is for testing only
  		// this.articledata = this.articleService.getData("dummy");
      this.youtubevideoid = 'kOHB85vDuow'

  	}

    getLesson(): void {
      this.state$ = this.activatedRoute.paramMap
            .pipe(map(() => window.history.state))
    }

    onReady(event: YT.PlayerEvent) {
      event.target.playVideo();
    }

    onStateChange(event: YT.OnStateChangeEvent) {
      if (event.data === YT.PlayerState.CUED) {
        event.target.playVideo();
      }
    }

}
