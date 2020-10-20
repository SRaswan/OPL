import { Component, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-starthere',
  templateUrl: './starthere.component.html',
  styleUrls: ['./starthere.component.css']
})
export class StarthereComponent implements OnInit {
   @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;

  constructor() { }

  ngOnInit() {
     var tag = document.createElement('script');
     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);     
  }
  onStateChange(event: YT.OnStateChangeEvent) {
    if (event.data === YT.PlayerState.CUED) {
      event.target.playVideo();
    }
  }
}
