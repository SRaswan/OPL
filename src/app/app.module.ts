import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MusicComponent,
    ComsciComponent,
    ScienceComponent,
    MathComponent,
    SidebarComponent,
    TrumpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
