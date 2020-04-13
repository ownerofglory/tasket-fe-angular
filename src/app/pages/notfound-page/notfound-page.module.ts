import { NgModule } from '@angular/core';
import { NotfoundPageComponent } from './notfound-page.component';
import { NavComponent } from 'src/app/shared/components/nav/nav.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [NotfoundPageComponent],
    declarations: [NotfoundPageComponent]
})
export class NotfoundPageModule {}