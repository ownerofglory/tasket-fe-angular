import { NgModule } from '@angular/core';
import { SpaceComponent } from './space/space.component';
import { SpacesPageComponent } from './spaces-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [SpacesPageComponent],
    declarations: [
        SpacesPageComponent,
        SpaceComponent
    ]
})
export class SpacesModule {}