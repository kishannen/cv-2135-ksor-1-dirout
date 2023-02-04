import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Routing

import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { AchievementComponent } from './achievement/achievement.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// ROUTES

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'achievement', component: AchievementComponent },
  { path: 'contact', component: PagenotfoundComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ReferencesComponent,
    AchievementComponent,
    PagenotfoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
