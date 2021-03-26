import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contributor, Lesson } from '../models/allmodels';
import { BackendapiService } from '../services/backendapi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user_handle: string;
    profile: Contributor;
    lessons: Lesson[];
    private observable_profile: any = null;
    private observable_param: any = null;
    private observable_lessons: any = null;

  constructor(private sidebarlinkService: BackendapiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.user_handle = this.route.snapshot.paramMap.get('user_handle');
      this.getProfile(this.user_handle);
      this.getLessons(this.user_handle);
  }

  getProfile(user_handle: string): void {
    this.observable_profile = this.sidebarlinkService.getProfile(user_handle)
             .subscribe(profile => this.profile = profile);
  }
  getLessons(user_handle: string): void {
     this.observable_lessons = this.sidebarlinkService.getLessonsByUser(user_handle)
               .subscribe(lessons => this.lessons = lessons);
   }

  ngOnDestroy() {
    if (this.observable_profile != null)
       this.observable_profile.unsubscribe();
    if (this.observable_param != null)
       this.observable_param.unsubscribe();
    if (this.observable_lessons != null)
       this.observable_lessons.unsubscribe();

  }

}
