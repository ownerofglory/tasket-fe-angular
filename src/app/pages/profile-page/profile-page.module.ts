import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilePageComponent } from './profile-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        BrowserModule
    ],
    exports: [ProfilePageComponent],
    declarations: [ProfilePageComponent]
})
export class ProfilePageModule {
    
}