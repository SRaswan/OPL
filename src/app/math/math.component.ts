import { Component, OnInit } from '@angular/core';
import { SidebarLink } from '../sidebarlink';
import { SidebarlinkService } from '../sidebarlink.service'


@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
