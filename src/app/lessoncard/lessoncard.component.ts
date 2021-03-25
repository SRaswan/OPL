import { Component, OnInit, Input } from '@angular/core';
import { Lesson} from '../models/allmodels';

@Component({
  selector: 'app-lessoncard',
  templateUrl: './lessoncard.component.html',
  styleUrls: ['./lessoncard.component.css']
})
export class LessoncardComponent implements OnInit {

  @Input() lesson: Lesson;

  constructor() { }

  ngOnInit(): void {
  }

}
