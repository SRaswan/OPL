import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Category, SubCategory, Lesson } from '../models/allmodels';
import { BackendapiService } from '../services/backendapi.service';

import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[];
  top_lessons: Lesson[];

  @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;


  constructor(private sidebarlinkService: BackendapiService) { }

  ngOnInit() {
    this.getCategories();
    this.getTopLessons();

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  }

  getCategories(): void {
    this.sidebarlinkService.getCategories()
              .subscribe(categories => this.categories = categories);
  }

  getTopLessons(): void {
    this.sidebarlinkService.getTopLessons()
              .subscribe(top_lessons => this.top_lessons = top_lessons);
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
