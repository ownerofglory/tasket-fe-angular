import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [LoginPageComponent],
    declarations: [LoginPageComponent]
})
export class LoginPageModule {}