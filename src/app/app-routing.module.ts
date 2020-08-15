import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { ComsciComponent } from './comsci/comsci.component';
import { ScienceComponent } from './science/science.component';
import { MathComponent } from './math/math.component';
import { TrumpetComponent } from './musiccomponents/trumpet/trumpet.component';
import { StarthereComponent } from './starthere/starthere.component';
import { ArticleComponent } from './article/article.component';
import { LessonlistComponent } from './lessonlist/lessonlist.component';
import { LessonsearchComponent } from './lessonsearch/lessonsearch.component';

const routes: Routes = [
	// { path: '', pathMatch:'full', component: RouterModule },
	{ path: '', redirectTo:"/starthere", pathMatch:'full' },
	{ path: 'search', component: LessonsearchComponent },
	{ path: 'lessonlist', component: LessonlistComponent },
	{ path: 'starthere', component: StarthereComponent },
	{ path: 'music', component: MusicComponent },
	{ path: 'comsci', component: ComsciComponent },
	{ path: 'science', component: ScienceComponent },
	{ path: 'math', component: MathComponent },
	{ path: 'trumpet', component: TrumpetComponent },
	{ path: 'article/:id', component: ArticleComponent }
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
