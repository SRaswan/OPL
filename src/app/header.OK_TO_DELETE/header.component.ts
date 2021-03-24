import { Component, OnInit, Input } from '@angular/core';
import { SidebarLink } from '../sidebarlink.ts.OK_TO_DELETE';
import { SidebarMenu } from '../sidebarmenu.ts.OK_TO_DELETE'
import { SidebarlinkService } from '../sidebarlink.service.ts.OK_TO_DELETE'

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
