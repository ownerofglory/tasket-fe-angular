import { NgModule } from '@angular/core';
import { SettingsPageComponent } from './settings-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [SettingsPageComponent],
    declarations: [SettingsPageComponent]
})
export class SettingsPageModule {}