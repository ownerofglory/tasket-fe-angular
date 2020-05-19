import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { PagesModule } from './pages/pages.module';
import { SpacesPageComponent } from './pages/spaces-page/spaces-page.component';
import { SettingsPageModule } from './pages/settings-page/settings-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
