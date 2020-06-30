import { Component, OnInit, Input } from '@angular/core';
import { ArticleData } from '../articleData'
import { ArticleService } from '../article.service'


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    articledata: ArticleData;


  	private _menu: string = '';

  	@Input()
  		set menu(menuString: string) {
  			this._menu = menuString;
  	}

  	get menu(): string { return this._menu; }

  	constructor(private articleService: ArticleService) { }

  	ngOnInit() {
  		this.articledata = this.articleService.getData(this.menu);
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
  	}

}
