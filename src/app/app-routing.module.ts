import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { SpacesPageComponent } from './pages/spaces-page/spaces-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'spaces/:id', component: ListsPageComponent },
  { path: 'spaces', component: SpacesPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: '**', component: NotfoundPageComponent},
  // { path: 'signup', component: SignupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
