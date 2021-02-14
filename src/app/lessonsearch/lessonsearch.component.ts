import { Component,
          OnInit,
          OnDestroy,
          ViewChild,
          ElementRef } from '@angular/core';

import { Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap
//  } from 'rxjs/operators';
import { DataexchangeService } from '../services/dataexchange.service';

import { liveSearch } from '../live-search.operator';

import { Category, SubCategory, Lesson } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-lessonsearch',
  templateUrl: './lessonsearch.component.html',
  styleUrls: ['./lessonsearch.component.css']
})


export class LessonsearchComponent implements OnInit, OnDestroy{
  @ViewChild('searchBox') searchBox;
  // lessons$: Observable<Lesson[]>;
  private searchTermSubject = new Subject<string>();

  readonly lessons$ = this.searchTermSubject.pipe(
    liveSearch((term: string) => this.sidebarLinkService.searchLessons(term))
  );

  private navigationSubscription;
  // private selectedLesson: Lesson;

  constructor(
    private sidebarLinkService: SidebarlinkService,
    private router: Router,
    private route: ActivatedRoute,
    private dataExchangeService: DataexchangeService) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        // If it is a NavigationEnd event re-initalise the component
        if (e instanceof NavigationEnd) {
          this.searchByURL();
        }
      });
    }

  // fire this if a term is supplied
  // getlessonsByTerm(): void {
  //   const term = this.route.snapshot.paramMap.get('term');
  //   this.search(term)
  // }


  // Push a search term into the observable stream.
   search(term: string): void {
     this.searchTermSubject.next(term);
   }

   searchByURL(): void {
     const term = this.route.snapshot.paramMap.get('term');
     if(term != null && term !== "") {
       this.searchBox.nativeElement.value = decodeURIComponent(term)
       this.search(term)
     }
   }


  ngOnInit(): void {

    this.dataExchangeService.searchQuerySourceObjservable.subscribe(search_term => this.searchTermSubject.next(search_term));

    // this.lessons$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(200),
    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.sidebarLinkService.searchLessons(term)),
    // );
    // this.searchByURL();
  }

  ngOnDestroy(): void {
      // avoid memory leaks here by cleaning up after ourselves. If we
      // don't then we will continue to run our initialiseInvites()
      // method on every navigationEnd event.
      if (this.navigationSubscription) {
         this.navigationSubscription.unsubscribe();
      }
      // this.sidebarLinkService.selectedLesson = this.selectedLesson;
    }




}
