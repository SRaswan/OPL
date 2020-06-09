import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { ComsciComponent } from './comsci/comsci.component';
import { ScienceComponent } from './science/science.component';
import { MathComponent } from './math/math.component';
import { TrumpetComponent } from './musiccomponents/trumpet/trumpet.component';

const routes: Routes = [
	{ path: '', pathMatch:'full', component: HomeComponent },
	{ path: 'starthere', component: StarthereComponent },
	{ path: 'music', component: MusicComponent },
	{ path: 'comsci', component: ComsciComponent },
	{ path: 'science', component: ScienceComponent },
	{ path: 'math', component: MathComponent },
	{ path: 'trumpet', component: TrumpetComponent }

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
