import { Injectable } from '@angular/core';
import { SidebarLink } from './sidebarlink';
import { SidebarMenu } from './sidebarmenu'

@Injectable({
  providedIn: 'root'
})
export class SidebarlinkService {

	public getLinks(menu: String): SidebarLink[] {

		if(menu == "trumpet") {
			return [
				{name: 'Buzz' },
				{name: 'Tone' },
				{name: 'More' }
			];

		} else if(menu == "math") {
			return [
				{name: 'math1'},
				{name: 'math2' }
			];

		} else if (menu == "science") {
			return [
				{name: 'sci1'},
				{name: 'sci2' },
				{name: 'sci3' }
			];

		} else if (menu == "music") {
			return [
				{name: 'music1'},
				{name: 'music2' },
				{name: 'music3' }
			];
		}
	}
	public getMenus(menuString: String): SidebarMenu[] {
		if (menuString == 'music') {
			return [
				{name: 'Trumpet' },
			];
		} else {
			return [
				{name: 'Trumpet' },
				{name: 'Ra' },				
				{name: 'a_'+menuString+'_a' },
			];
		}
	}



	constructor() { 


  }
}
