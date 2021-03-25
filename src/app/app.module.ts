import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { ArticleComponent } from './article/article.component';
// import { SearchComponent } from './search/search.component';
import { StarthereComponent } from './starthere/starthere.component';
import { LessonlistComponent } from './lessonlist/lessonlist.component';
import { LessonsearchComponent } from './lessonsearch/lessonsearch.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CategorycardComponent } from './categorycard/categorycard.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { ProfileComponent } from './profile/profile.component';
import { LessoncardComponent } from './lessoncard/lessoncard.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    StarthereComponent,
    SidebarComponent,
    // ArticleComponent,
    // SearchComponent,
    LessonlistComponent,
    LessonsearchComponent,
    CategorylistComponent,
    DashboardComponent,
    TopbarComponent,
    CategorycardComponent,
    PrivacyComponent,
    ContributorsComponent,
    ProfileComponent,
    LessoncardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  // exports: [
  //   ArticleComponent
  // ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class VideoModule {}
