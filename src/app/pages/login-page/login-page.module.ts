import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule, SharedModule],
    exports: [LoginPageComponent],
    declarations: [LoginPageComponent]
})
export class LoginPageModule {}