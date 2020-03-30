import { Component, OnInit } from '@angular/core';
import { SidebarLink } from '../sidebarlink';
import { SidebarlinkService } from '../sidebarlink.service'


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

	science = "fef";

  constructor() { }

  ngOnInit() {
  }

}
