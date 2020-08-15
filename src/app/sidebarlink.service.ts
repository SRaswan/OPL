import { Injectable } from '@angular/core';
import { SidebarLink } from './sidebarlink';
import { SidebarMenu } from './sidebarmenu';
import { Category, SubCategory, Lesson } from './category';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SidebarlinkService {
  private categoryUrl = environment.base_api_server+'/opl/dynamic/categories';  // URL to web api
  private lessonUrl = environment.base_api_server+'/opl/dynamic/lessons';  // URL to web api
  private lessonsearchUrl = environment.base_api_server+'/opl/dynamic/searchlessons?query=';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl)
      .pipe(
        map(resp => resp.length>0 ? resp : null)
        ,tap(resp => this.log('fetched all categories.'))
        ,catchError(this.handleError<Category[]>('get Category caught error'))
      );
  }

  public getTopLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonUrl)
      .pipe(
        map(resp => resp.length>0 ? resp : null)
        ,tap(resp => this.log('fetched top lessons.'))
        ,catchError(this.handleError<Lesson[]>('get Top Lessons caught error'))
      );
  }

  public searchLessons(term: string = ""): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonsearchUrl+encodeURIComponent(term))
      .pipe(
        map(resp => resp)
        ,tap(resp => this.log('fetched lessons matching search keyword.'))
        ,catchError(this.handleError<Lesson[]>('get Top Lessons caught error'))
      );
  }

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
  public getCategoriesDummy(): Observable<Category[]> {
    let records: Array<Array<string|number>> = [
              [1,"Computer Science",1,"C++",1],
              [1,"Computer Science",2,"Java",1],
              [1,"Computer Science",3,"Python",1],
              [1,"Computer Science",4,"Node",1],
              [1,"Computer Science",5,"Angular",1],
              [2,"Science",6,"Biology",2],
              [2,"Science",7,"Physics",2],
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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SidebarlinkService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
