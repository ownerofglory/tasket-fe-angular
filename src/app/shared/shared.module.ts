import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavComponent } from './components/nav/nav.component';
import { SpacesMockService } from './services/mock/spaces-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerService } from './services/spinner/spinner.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DraggableDirective } from './directives/draggable.directive';
import { DroppableDirective } from './directives/droppable.directive';
import { DragService } from './services/drag.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavComponent,
    SpinnerComponent
  ],
  declarations: [
    SharedComponent,
    NavComponent,
    SpinnerComponent,
    DroppableDirective,
    DraggableDirective
  ],
  providers: [
    DragService
  ]
})
export class SharedModule { }
