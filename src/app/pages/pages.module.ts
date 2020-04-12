import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { TaskComponent } from './lists-page/list/task/task.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavComponent } from '../shared/components/nav/nav.component';
import { AddTaskComponent } from './lists-page/list/add-task/add-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AddBoardComponent } from './lists-page/add-board/add-board.component';
import { EditTaskComponent } from './lists-page/list/edit-task/edit-task.component';
import { PriorityComponent } from './lists-page/list/task/priority/priority.component';
import { PrioritySelectComponent } from './lists-page/list/edit-task/priority-select/priority-select.component';
import { SpacesMockService } from '../shared/services/mock/spaces-mock.service';
import { ListComponent } from './lists-page/list/list.component';
import { SpacesPageComponent } from './spaces-page/spaces-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    BrowserModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  exports: [
    ListsPageComponent,
    SpacesPageComponent
  ],
  declarations: [
    PagesComponent,
    ListsPageComponent,
    ListComponent,
    TaskComponent,
    AddTaskComponent,
    AddBoardComponent,
    EditTaskComponent,
    PriorityComponent,
    PrioritySelectComponent,
    SpacesPageComponent
  ],
  providers: [
    
  ]
})
export class PagesModule { }
