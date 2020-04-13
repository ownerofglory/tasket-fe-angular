import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilePageComponent } from './profile-page.component';

@NgModule({
    imports: [SharedModule],
    exports: [ProfilePageComponent],
    declarations: [ProfilePageComponent]
})
export class ProfilePageModule {}