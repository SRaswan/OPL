import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ArticleData } from '../articleData'
import { ArticleService } from '../article.service'
import { YouTubePlayer } from '@angular/youtube-player';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    articledata: ArticleData;
    youtubevideoid: string;
    @ViewChild(YouTubePlayer) youtubePlayer: YouTubePlayer;

  	private _menu: string = '';

  	@Input()
  		set menu(menuString: string) {
  			this._menu = menuString;
  	}

  	get menu(): string { return this._menu; }

  	constructor(private articleService: ArticleService) { }

  	ngOnInit() {
      // const tag = document.createElement('script');
      // tag.src = 'https://www.youtube.com/iframe_api';
      // document.body.appendChild(tag);

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  		this.articledata = this.articleService.getData(this.menu);
      this.youtubevideoid = 'kOHB85vDuow'

      // const tag = document.createElement('script');
      // tag.src = 'https://www.youtube.com/iframe_api';
      // document.body.appendChild(tag);
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
