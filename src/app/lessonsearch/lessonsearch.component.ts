import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { liveSearch } from '../services/live-search.operator';
import { BackendapiService } from '../services/backendapi.service';
// import { DataexchangeService } from '../services/dataexchange.service';
// import { Category, SubCategory, Lesson } from '../models/allmodels';

@Component({
  selector: 'app-lessonsearch',
  templateUrl: './lessonsearch.component.html',
  styleUrls: ['./lessonsearch.component.css']
})

export class LessonsearchComponent implements OnInit, OnDestroy{
  @ViewChild('searchBox') searchBox: ElementRef;
  // lessons$: Observable<Lesson[]>;
  private searchTermSubject = new Subject<string>();
  private observable_param: any = null;
  private term: string = "";

  // this is observable that gets lessons from backend service
  readonly lessons$ = this.searchTermSubject.pipe(
    liveSearch((term: string) => this.backendapiService.searchLessons(term))
  );

  constructor(  private backendapiService: BackendapiService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTermSubject.next(term);
  }

  ngAfterViewInit() {
    this.searchBox.nativeElement.value = this.term;
  }
  // this is not working, why ?
  searchByURL(): void {
    this.observable_param = this.route.queryParams.subscribe(params => {
      this.term = (params['term']==null?"":params['term']);
    });
    this.search(this.term);
  }

  ngOnInit(): void {
    this.searchByURL();
  }

  ngOnDestroy(): void {
    if (this.observable_param != null)
      this.observable_param.unsubscribe();
  }

}
