import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { ArticleData } from '../articleData.ts.OK_TO_DELETE'
import { ArticleService } from '../article.service.ts.OK_TO_DELETE'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  articledatas$: Observable<ArticleData>;
  private searchTerms = new Subject<string>()


  constructor(private articleService: ArticleService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.articledatas$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),
    //
    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),
    //
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.articleService.searchArticles(term))
    // );

  }

}
