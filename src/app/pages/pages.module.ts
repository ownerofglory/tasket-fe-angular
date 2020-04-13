import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SpacesPageComponent } from './spaces-page/spaces-page.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ForgotPasswordPageModule } from './forgot-password-page/forgot-password-page.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { NotfoundPageModule } from './notfound-page/notfound-page.module';
import { SettingsPageModule } from './settings-page/settings-page.module';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { SignupPageModule } from './signup-page/signup-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { SpacesModule } from './spaces-page/spaces-page.module';
import { ListPageModule } from './lists-page/list-page.module';

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
    PagesRoutingModule,
    ForgotPasswordPageModule,
    AdminPageModule,
    HomePageModule,
    NotfoundPageModule,
    SettingsPageModule,
    ProfilePageModule,
    SignupPageModule,
    LoginPageModule,
    SpacesModule,
    ListPageModule
  ],
  exports: [
    ListsPageComponent,
    SpacesPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    NotfoundPageComponent,
    HomePageComponent,
    AdminPageComponent,
    NotfoundPageComponent
  ],
  declarations: [
    PagesComponent
  ],
  providers: [

  ]
})
export class PagesModule { }
