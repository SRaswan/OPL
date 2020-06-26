import { Injectable } from '@angular/core';
import { SidebarLink } from './sidebarlink';
import { SidebarMenu } from './sidebarmenu';
import { Category, SubCategory } from './category';
import { Observable, of } from 'rxjs';

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

  /// Observable Service
  public getCategories(): Observable<Category[]> {
    let records: Array<Array<string|number>> = [
              [1,"Computer Science",1,"C++",1],
              [1,"Computer Science",2,"Java",1],
              [1,"Computer Science",3,"Python",1],
              [1,"Computer Science",4,"Node",1],
              [1,"Computer Science",5,"Angular",1],
              [2,"Science",6,"Biology",2],
              [2,"Science",8,"Chemistry",2],
              [2,"Science",9,"Environmental Science",2],
              [3,"Math",10,"Algebra",3],
              [3,"Math",11,"Geometry",3],
              [3,"Math",12,"Trigonometry",3],
              [3,"Math",13,"Pre-Calculus",3],
              [3,"Math",14,"Calculus",3]];

    let categories: Category[] = [];
    let category = undefined;
    let prev_id = 0;
    for(var idx in records)
    {
        if(records[idx][0] != prev_id) {
          category = new Category(+records[idx][0],records[idx][1].toString());
          categories.push(category);
          prev_id = +records[idx][0];
        }
        category.addSubCategory(+records[idx][2],records[idx][3].toString());
    }

    return of(categories);
	}


	constructor() {


  }


}
