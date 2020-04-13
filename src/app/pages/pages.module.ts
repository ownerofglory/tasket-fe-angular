import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { TaskComponent } from './lists-page/list/task/task.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavComponent } from '../shared/components/nav/nav.component';
import { AddTaskComponent } from './lists-page/list/add-task/add-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AddBoardComponent } from './lists-page/add-board/add-board.component';
import { EditTaskComponent } from './lists-page/list/edit-task/edit-task.component';
import { PriorityComponent } from './lists-page/list/task/priority/priority.component';
import { PrioritySelectComponent } from './lists-page/list/edit-task/priority-select/priority-select.component';
import { SpacesMockService } from '../shared/services/mock/spaces-mock.service';
import { ListComponent } from './lists-page/list/list.component';
import { SpacesPageComponent } from './spaces-page/spaces-page.component';
import { SpaceComponent } from './spaces-page/space/space.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupFormComponent } from './signup-page/signup-form/signup-form.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SignupSuccessComponent } from './signup-page/signup-success/signup-success.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    BrowserModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    RouterModule,
    PagesRoutingModule
  ],
  exports: [
    ListsPageComponent,
    SpacesPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    NotfoundPageComponent,
    HomePageComponent
  ],
  declarations: [
    PagesComponent,
    ListsPageComponent,
    ListComponent,
    TaskComponent,
    AddTaskComponent,
    AddBoardComponent,
    EditTaskComponent,
    PriorityComponent,
    PrioritySelectComponent,
    SpacesPageComponent,
    SpaceComponent,
    LoginPageComponent,
    SignupPageComponent,
    SignupFormComponent,
    SignupSuccessComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    NotfoundPageComponent,
    HomePageComponent
  ],
  providers: [
    
  ]
})
export class PagesModule { }
