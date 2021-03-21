import { Component, OnInit } from '@angular/core';
import { Contributor } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  contributors: Contributor[];
  private observable_contributors: any = null;

  constructor(private sidebarlinkService: SidebarlinkService) { }

  ngOnInit(): void {
     this.getContributors();
  }

  getContributors(): void {
    this.observable_contributors = this.sidebarlinkService.getContributors()
             .subscribe(contributors => this.contributors = contributors);
  }

  ngOnDestroy() {

     if (this.observable_contributors != null)
        this.observable_contributors.unsubscribe();

  }

}
