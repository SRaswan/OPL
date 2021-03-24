import { Component, OnInit, Input } from '@angular/core';
import { Category} from '../models/allmodels';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategorycardComponent implements OnInit {

  @Input() category: Category;
  @Input() public cardcolor: string;
  @Input() public cardicon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
