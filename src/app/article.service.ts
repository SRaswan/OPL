import { Injectable } from '@angular/core';
import { ArticleData } from './articleData'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

  constructor(private http: HttpClient) { }

  public getData(menu:string): ArticleData{
    if (menu == 'trumpet') {
      return {
        title: 'Trumpet',
        about:'blablabla',
        videoURL:'https://www.youtube.com/embed/MmB9b5njVbA',
      };
    } else if (menu == 'trombone') {
      return {
          title: 'Trombone',
          about:'This is a cool video about Trombone',
          videoURL:'https://www.youtube.com/embed/zyG3pNG6Gnw',
      };
    } else {
      return {
        title: 'Yuk',
        about:'"Fancy" is a song by South Korean girl group Twice. It was released by JYP Entertainment on April 22, 2019, as the lead single from the group\'s seventh extended play, Fancy You. Wikipedia',
        videoURL:'https://www.youtube.com/embed/kOHB85vDuow',
      };
    }
  }
  articledata: ArticleData;
  /* GET heroes whose name contains search term */
  // searchArticles(term: string):Observable<ArticleData> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<ArticleData>(`${this.articledata.videoURL}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //        this.log(`found articles matching "${term}"`) :
  //        this.log(`no articles matching "${term}"`)),
  //     catchError(this.handleError<ArticleData>('search', []))
  //   );
  // }

}
