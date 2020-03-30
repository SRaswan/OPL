import { Component, OnInit, Input } from '@angular/core';
import { SidebarLink } from '../sidebarlink';
import { SidebarMenu } from '../sidebarmenu'
import { SidebarlinkService } from '../sidebarlink.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	sidebarmenus: SidebarMenu[]; 

	Menu: String;
	private _menu = '';

	@Input()
		set menu(menuString: string) {
			this._menu = menuString;
	}

	get menu(): string { return this._menu; }

	constructor(private sidebarlinkService: SidebarlinkService) { }

	ngOnInit() {
		this.sidebarmenus = this.sidebarlinkService.getMenus(this.menu);
	}

}
