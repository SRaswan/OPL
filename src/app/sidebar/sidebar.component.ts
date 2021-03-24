import { Component, OnInit, Input } from '@angular/core';
import { BackendapiService } from '../services/backendapi.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	Menu: String;

	private _menu = '';

	@Input()
		set menu(menu: string) {
			this._menu = menu;
	}

	get menu(): string { return this._menu; }

	constructor(private sidebarlinkService: BackendapiService) {
	}

	ngOnInit() {
	}

}
