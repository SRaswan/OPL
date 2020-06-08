import { Component, OnInit, Input } from '@angular/core';
import { SidebarLink } from '../sidebarlink';
import { SidebarlinkService } from '../sidebarlink.service'
import { ArticleData } from '../articleData'
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  // articledata: ArticleData[];
  //
	// Menu: String;
	// private _menu = '';
  //
	// @Input()
	// 	set menu(menuString: string) {
	// 		this._menu = menuString;
	// }
  //
	// get menu(): string { return this._menu; }
  //
	// constructor(private articleService: ArticleService) { }

	ngOnInit() {
		// this.articledata = this.articleService.getData(this.menu);
	}

}
