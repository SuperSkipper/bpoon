import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent} from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component';
import { SelectComponent } from './projects/select/select.component';
import { BpoonComponent } from './projects/bpoon/bpoon.component';
import { SParkComponent } from './projects/spark/spark.component';
import { NightLightComponent } from './projects/night_light/night-light.component';
import { MUSI2040PortfolioComponent } from './projects/musi2040-portfolio/musi2040-portfolio.component';
import { Week2Component } from './projects/musi2040-portfolio/week2/week2.component';
import { P3Component } from './projects/musi2040-portfolio/p3/p3.component';
import { P4Component } from './projects/musi2040-portfolio/p4/p4.component';
import { P5Component } from './projects/musi2040-portfolio/p5/p5.component';
import { P6Component } from './projects/musi2040-portfolio/p6/p6.component';
import { P7Component } from './projects/musi2040-portfolio/p7/p7.component';
import { P8Component } from './projects/musi2040-portfolio/p8/p8.component';
import { P9Component } from './projects/musi2040-portfolio/p9/p9.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, data: {animation: 'homePage'}},
  {path: 'resume', component: ResumeComponent, data: {animation: 'resumePage'}},
  {path: 'about', component: AboutComponent, data: {animation: 'aboutPage'}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'projectsPage'},
    children: [
      {path: '', redirectTo: 'select', pathMatch: 'full'},
      {path: 'select', component:SelectComponent, data: {animation: 'selectPage'}},
      {path: 'bpoon', component:BpoonComponent, data: {animation: 'projectPage'}},
      {path: 'spark', component:SParkComponent, data: {animation: 'projectPage'}},
      {path: 'night_light', component:NightLightComponent, data: {animation: 'projectPage'}},
      {path: 'musi2040_portfolio', component:MUSI2040PortfolioComponent,
        children :[
          {path: 'Music_in_My_Family', component:Week2Component},
          {path: 'P3', component:P3Component},
          {path: 'P4', component:P4Component},
          {path: 'P5', component:P5Component},
          {path: 'P6', component:P6Component},
          {path: 'P7', component:P7Component},
          {path: 'P8', component:P8Component},
          {path: 'P9', component:P9Component}
        ]
      }
    ]
  },
  {path: 'contact', component: ContactComponent, data: {animation: 'contactPage'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
