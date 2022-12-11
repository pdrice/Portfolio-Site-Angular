import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {FlexLayoutModule} from '@angular/flex-layout'



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBannerComponent,
    ProjectsComponent,
    TechnologiesComponent,
    AboutMeComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
