import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ArticleData } from '../articleData'
import { ArticleService } from '../article.service'
import { YouTubePlayer } from '@angular/youtube-player';
import { Category, SubCategory, Lesson } from '../category';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    articledata: ArticleData;
    youtubevideoid: string;
    @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;
    lesson_observe$: Observable<Lesson>;
    lesson: Lesson;
    lesson_id: number;
    // obj: Object;

  	private _menu: string = '';

  	@Input()
  		set menu(menuString: string) {
  			this._menu = menuString;
  	}

  	get menu(): string { return this._menu; }

  	constructor(private articleService: ArticleService,
                public activatedRoute: ActivatedRoute) { }

  	ngOnInit() {
      // this.lesson$ = this.activatedRoute.paramMap.pipe(() => window.history.state)
      this.getLesson()

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  		this.articledata = this.articleService.getData(this.menu);
      this.youtubevideoid = 'kOHB85vDuow'

  	}

    getLesson(): void {
      let obj = this.activatedRoute.paramMap.pipe(() => window.history.state)

      this.lesson_observe$.subscribe(obj => {if(obj instanceof Lesson)
                                        {this.lesson = obj; this.lesson_id = obj.id;}
                                     else {this.lesson_id = obj; this.lesson = null;}} );

      // if (obj.lesson.id != null) {
      //     this.lesson = Object.assign(new Lesson(), obj)
      //     this.lesson_id = obj.lesson.id;
      // } else {
      //   this.lesson_id = obj.navigationId;
      //   this.lesson = null;
      // }

    }

    // openInfoWindow(markerElement: MapMarker, marker: MarkerObject) {
    //   if (this.youtubePlayer && this.youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING) {
    //     this.youtubePlayer.stopVideo();
    //   }
    // }

    onReady(event: YT.PlayerEvent) {
      event.target.playVideo();
    }

    onStateChange(event: YT.OnStateChangeEvent) {
      if (event.data === YT.PlayerState.CUED) {
        event.target.playVideo();
      }
    }

}
