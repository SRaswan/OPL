import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { Lesson } from '../models/allmodels';
// import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BackendapiService } from '../services/backendapi.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    
    public apiLoaded:boolean = false;
    lesson: Lesson = null;
    player: YT.Player;
    id: string = 'qDuKsiwS5xw';
    private observable_lesson: any = null;

  	constructor(
                // public activatedRoute: ActivatedRoute,
                // public router: Router
                private backendapiService: BackendapiService,
                private route: ActivatedRoute
                ) { }

  	ngOnInit() {
      let lesson_id = this.route.snapshot.paramMap.get('id');
      this.getLesson(lesson_id);

      // if (!this.apiLoaded) {
      //   // This code loads the IFrame Player API code asynchronously, according to the instructions at
      //   // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      //   const tag = document.createElement('script');
      //   tag.src = 'https://www.youtube.com/iframe_api';
      //   document.body.appendChild(tag);
      //   this.apiLoaded = true;
      // }
  	}
    getLesson(lesson_id: string): void {
      this.observable_lesson = this.backendapiService.getLesson(lesson_id)
               .subscribe(lesson => {
                  this.lesson = lesson;
                  this.apiLoaded = true;
                  }
                );
    }   
    savePlayer(player) {
      this.player = player;
      console.log('player instance', player);
    }
    onStateChange(event) {
      console.log('player state', event.data);
    }


    ngOnDestroy() {
      if (this.observable_lesson != null)
         this.observable_lesson.unsubscribe();
    }  

}
