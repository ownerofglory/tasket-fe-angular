import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { SpacesPageComponent } from './pages/spaces-page/spaces-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'spaces', pathMatch: 'full'},
  { path: 'spaces/:id', component: ListsPageComponent },
  { path: 'spaces', component: SpacesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
