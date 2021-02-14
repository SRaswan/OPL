import { Component, OnInit } from '@angular/core';
import { DataexchangeService } from '../services/dataexchange.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CurrentUser } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  private opl_login_url = environment.base_api_server+'/opl/login';
  private opl_logout_url = environment.base_api_server+'/opl/logout';

  current_date: Date;
  duration_window_options: Record<string, number>;
  current_user: any = null;

  private observable_currentuser: any = null;

  constructor(private dataExchangeService: DataexchangeService,
              private router: Router,
              private sidebarlinkService: SidebarlinkService
            ) { }

  ngOnInit() {
    this.observable_currentuser = this.sidebarlinkService.getCurrentUser().subscribe(current_user => this.current_user = current_user);
    // this.current_date = new Date();
    this.dataExchangeService.currentDateSourceObjservable.subscribe(date => this.current_date = date);
    this.dataExchangeService.durationWindowOptionsSourceObjservable.subscribe(durationWindowOptions => this.duration_window_options = durationWindowOptions);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.dataExchangeService.changeSearchQuery(term);
    this.router.navigate(['/search']);
  }

  ngOnDestroy() {
     if (this.observable_currentuser != null)
        this.observable_currentuser.unsubscribe();
  }
}
