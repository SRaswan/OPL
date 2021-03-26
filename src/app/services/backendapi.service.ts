import { Injectable } from '@angular/core';
import { Category, SubCategory, Lesson, CurrentUser, Contributor } from '../models/allmodels';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendapiService {
  private categoryUrl = environment.base_api_server+'/opl/dynamic/categories';  // URL to web api
  private lessonsUrl = environment.base_api_server+'/opl/dynamic/lessons';  // URL to web api
  // private lessonUrl = environment.base_api_server+'/opl/dynamic/lessons/';  // URL to web api
  private lessonsearchUrl = environment.base_api_server+'/opl/dynamic/searchlessons?query=';  // URL to web api
  private currentuserUrl = environment.base_api_server+'/opl/dynamic/current_user';  // URL to web api
  private profileUrl = environment.base_api_server+'/opl/dynamic/contributor/';
  private contributorsUrl = environment.base_api_server+'/opl/dynamic/contributors';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // Get Current User
  public getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(this.currentuserUrl)
      .pipe(
        map(resp => resp)
        ,tap(resp => this.log('fetched current user.'))
        ,catchError(this.handleError<CurrentUser>('get fetched current user caught error'))
      );
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl)
      .pipe(
        map(resp => resp.length>0 ? resp : null)
        ,tap(resp => this.log('fetched all categories.'))
        ,catchError(this.handleError<Category[]>('get Category caught error'))
      );
  }

  public getTopLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonsUrl)
      .pipe(
        map(resp => resp.length>0 ? resp : null)
        ,tap(resp => this.log('fetched top lessons.'))
        ,catchError(this.handleError<Lesson[]>('get Top Lessons caught error'))
      );
  }

  public getLessons(category_id: string, sub_category_id: string): Observable<Lesson[]> {
     // return this.http.get<Lesson[]>(this.lessonUrl+"?category="+category_id+"&sub_category="+sub_category_id);
     let lessonsURL:string = this.lessonsUrl+"?category="+category_id+"&sub_category="+sub_category_id
     return this.http.get<Lesson[]>(lessonsURL)
      .pipe(
         map(resp => resp.length>0 ? resp : null)
         ,tap(resp => this.log("fetched lessons of the category="+category_id+"&sub_category="+sub_category_id))
         ,catchError(this.handleError<Lesson[]>('get Lessons caught error'))
      );

  }s
  public getLessonsByUser(user_handle: string): Observable<Lesson[]> {
    let lessonsURL:string = this.lessonsUrl+"?user_handle="+user_handle
    return this.http.get<Lesson[]>(lessonsURL)
     .pipe(
        map(resp => resp.length>0 ? resp : null)
        ,tap(resp => this.log("fetched lessons of the user_handle="+user_handle))
        ,catchError(this.handleError<Lesson[]>('get lessons by user caught error'))
     );
  }

  public getLesson(lesson_id: string): Observable<Lesson> {
    let lesson_url:string = this.lessonsUrl + "/" + lesson_id;
    return this.http.get<Lesson>(lesson_url)
    .pipe(
      map(resp => resp)
      ,tap(resp => this.log('fetched Lesson.'))
      ,catchError(this.handleError<Lesson>('get Lesson caught error'))
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

  public getContributors(): Observable<Contributor[]> {
     // return this.http.get<Lesson[]>(this.lessonUrl+"?category="+category_id+"&sub_category="+sub_category_id);
     let contributorsURL:string = this.contributorsUrl;
     return this.http.get<Contributor[]>(contributorsURL)
      .pipe(
         map(resp => resp.length>0 ? resp : null)
         ,tap(resp => this.log("fetched contributors"))
         ,catchError(this.handleError<Contributor[]>('get Contributors caught error'))
      );

 }

 public getProfile(user_handle: string): Observable<Contributor> {
    let profile_url:string = this.profileUrl + user_handle;
    return this.http.get<Contributor>(profile_url)
     .pipe(
       map(resp => resp)
       ,tap(resp => this.log('fetched Contributor profile.'))
       ,catchError(this.handleError<Contributor>('get Contributor profile caught error'))
     );
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
