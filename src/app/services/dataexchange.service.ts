import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataexchangeService {

  private dateSource = new BehaviorSubject(new Date());
  public currentDateSourceObjservable = this.dateSource.asObservable();

  private durationWindowOptions: Record<string, number> = {
                                                    // '1D' : 1
                                                   // ,'1Wk': 7
                                                   // ,'1M' : 30
                                                   // ,'1Y' : 365
                                                      };

  private durationWindowOptionsSource = new BehaviorSubject(this.durationWindowOptions);
  public durationWindowOptionsSourceObjservable = this.durationWindowOptionsSource.asObservable();

  private searchQuerySource = new BehaviorSubject("search query ...");
  public searchQuerySourceObjservable = this.searchQuerySource.asObservable();

  constructor() { }

  public changeDate(date: Date) {
    this.dateSource.next(date);
  }

  public changeDurationWindowOptions(durationWindowOptions: Record<string, number>) {
    this.durationWindowOptionsSource.next(durationWindowOptions);
  }

  public changeSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}
