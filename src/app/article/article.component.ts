import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { YouTubePlayer } from '@angular/youtube-player';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { Lesson } from '../models/allmodels';
// import { Observable, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router, ParamMap, NavigationStart } from '@angular/router';
// import { map, catchError, filter } from 'rxjs/operators';
import { BackendapiService } from '../services/backendapi.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    apiLoaded:boolean = false;
    // youtubevideoid: string;
    // @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;

    // lesson_observe$: Observable<Lesson>;
    // navigationId: string;
    
    // used by older view
    state$: Observable<object>;
    // used by latest view
    lesson: Lesson = null;
    // lesson_id: string = '0';

    private observable_lesson: any = null;

  	constructor(
                // public activatedRoute: ActivatedRoute,
                // public router: Router
                private backendapiService: BackendapiService,
                private route: ActivatedRoute
                ) { }

  	ngOnInit() {
      // this.lesson$ = this.activatedRoute.paramMap.pipe(() => window.history.state)
      
      // used by older view
      // this.getLessonByState();
      // this.lesson_id = this.route.snapshot.paramMap.get('id');

      let lesson_id = this.route.snapshot.paramMap.get('id');
      this.getLesson(lesson_id);

      if (!this.apiLoaded) {
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
        // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }

      // var tag = document.createElement('script');
      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // this is for testing only
  		// this.articledata = this.articleService.getData("dummy");
      // this.youtubevideoid = 'kOHB85vDuow'
      

  	}

    getLesson(lesson_id: string): void {
      this.observable_lesson = this.backendapiService.getLesson(lesson_id)
               .subscribe(lesson => this.lesson = lesson);
    }

    
    // used by older view
    // getLessonByState(): void {
    //   this.state$ = this.route.paramMap
    //         .pipe(map(() => window.history.state))
    // }

    onReady(event: YT.PlayerEvent) {
      event.target.playVideo();
    }

    onStateChange(event: YT.OnStateChangeEvent) {
      if (event.data === YT.PlayerState.CUED) {
        event.target.playVideo();
      }
    }

    ngOnDestroy() {
      if (this.observable_lesson != null)
         this.observable_lesson.unsubscribe();
    }  

}
