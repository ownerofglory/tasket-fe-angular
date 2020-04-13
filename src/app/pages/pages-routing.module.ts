import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-page/signup-form/signup-form.component';
import { SignupSuccessComponent } from './signup-page/signup-success/signup-success.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';

const routes: Routes = [
  { path: 'signup', redirectTo: 'signup/form', pathMatch: 'full' },
  { path: 'signup/form', component: SignupFormComponent },
  { path: 'signup/success', component: SignupSuccessComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
