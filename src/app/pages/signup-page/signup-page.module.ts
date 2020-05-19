import { NgModule } from '@angular/core';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupPageComponent } from './signup-page.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule,
        FormsModule
    ],
    exports: [SignupPageComponent],
    declarations: [
        SignupPageComponent,
        SignupFormComponent,
        SignupSuccessComponent,
    ]
})
export class SignupPageModule {}