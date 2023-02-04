import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component'
import { EducationComponent } from './education/education.component'
import { SkillsComponent } from './skills/skills.component'
import { ReferencesComponent } from './references/references.component'
import { AchievementComponent } from './achievement/achievement.component'



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, EducationComponent, SkillsComponent, ReferencesComponent, AchievementComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }