import { Component, OnInit, Input } from '@angular/core';
import { SidebarLink } from '../sidebarlink';
import { SidebarlinkService } from '../sidebarlink.service';
import { SidebarMenu } from '../sidebarmenu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	sidebarlinks: SidebarLink[]; 
//	subsidebarlink: SubsidebarLink[];
	Menu: String;
//	Name: SidebarLink["name"];

	private _menu = '';
//	private _name = 'name';

	@Input()
		set menu(menu: string) {
			this._menu = menu;
	}

	get menu(): string { return this._menu; }
//get name(): string { return this._name }

	constructor(private sidebarlinkService: SidebarlinkService) { 
	}

	ngOnInit() {
		this.sidebarlinks = this.sidebarlinkService.getLinks(this.menu);
//		this.subsidebarlink = this.sidebarlinkService.getSublinks(this.name);
	}

}
