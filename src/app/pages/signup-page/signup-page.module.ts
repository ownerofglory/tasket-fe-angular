import { NgModule } from '@angular/core';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    exports: [SignupPageComponent],
    declarations: [
        SignupPageComponent,
        SignupFormComponent,
        SignupSuccessComponent,
    ]
})
export class SignupPageModule {}