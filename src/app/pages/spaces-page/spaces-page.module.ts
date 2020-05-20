import { NgModule } from '@angular/core';
import { SpaceComponent } from './space/space.component';
import { SpacesPageComponent } from './spaces-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AddSpaceComponent } from './add-space/add-space.component';
import { AddSpaceModalComponent } from './add-space/add-space-modal/add-space-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    exports: [SpacesPageComponent],
    declarations: [
        SpacesPageComponent,
        SpaceComponent,
        AddSpaceComponent,
        AddSpaceModalComponent
    ]
})
export class SpacesModule {}