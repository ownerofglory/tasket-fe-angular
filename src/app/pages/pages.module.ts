import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BoardComponent } from './boards-page/board/board.component';
import { BoardsPageComponent } from './boards-page/boards-page.component';
import { TaskComponent } from './boards-page/board/task/task.component';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavComponent } from '../shared/components/nav/nav.component';
import { AddTaskComponent } from './boards-page/board/add-task/add-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    BoardsPageComponent
  ],
  declarations: [
    PagesComponent,
    BoardsPageComponent,
    BoardComponent,
    TaskComponent,
    AddTaskComponent
  ]
})
export class PagesModule { }
