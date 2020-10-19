import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MusicComponent } from './music/music.component';
import { ComsciComponent } from './comsci/comsci.component';
import { ScienceComponent } from './science/science.component';
import { MathComponent } from './math/math.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TrumpetComponent } from './musiccomponents/trumpet/trumpet.component';
import { ArticleComponent } from './article/article.component';
import { SearchComponent } from './search/search.component';
import { StarthereComponent } from './starthere/starthere.component';
import { LessonlistComponent } from './lessonlist/lessonlist.component';
import { LessonsearchComponent } from './lessonsearch/lessonsearch.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CategorycardComponent } from './categorycard/categorycard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StarthereComponent,
    MusicComponent,
    ComsciComponent,
    ScienceComponent,
    MathComponent,
    SidebarComponent,
    TrumpetComponent,
    ArticleComponent,
    SearchComponent,
    LessonlistComponent,
    LessonsearchComponent,
    CategorylistComponent,
    DashboardComponent,
    TopbarComponent,
    CategorycardComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class VideoModule {}
