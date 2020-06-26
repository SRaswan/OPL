import { Component, OnInit } from '@angular/core';

import { Category, SubCategory } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[];

  constructor(private sidebarlinkService: SidebarlinkService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.sidebarlinkService.getCategories()
              .subscribe(categories => this.categories = categories);
  }

}
