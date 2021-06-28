import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BpoonComponent } from './projects/bpoon/bpoon.component';
import { SelectComponent } from './projects/select/select.component';
import { SParkComponent } from './projects/spark/spark.component';
import { NightLightComponent } from './projects/night_light/night-light.component';
import { MUSI2040PortfolioComponent } from './projects/musi2040-portfolio/musi2040-portfolio.component';
import { Week2Component } from './projects/musi2040-portfolio/week2/week2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ResumeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    BpoonComponent,
    SelectComponent,
    SParkComponent,
    NightLightComponent,
    MUSI2040PortfolioComponent,
    Week2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
