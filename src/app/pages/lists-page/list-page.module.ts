import { NgModule } from '@angular/core';
import { PrioritySelectComponent } from './list/edit-task/priority-select/priority-select.component';
import { PriorityComponent } from './list/task/priority/priority.component';
import { ListsPageComponent } from './lists-page.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './list/task/task.component';
import { AddTaskComponent } from './list/add-task/add-task.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { EditTaskComponent } from './list/edit-task/edit-task.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddToTaskListComponent } from './list/edit-task/add-to-task-list/add-to-task-list.component';
import { ActionsListComponent } from './list/edit-task/actions-list/actions-list.component';
import { ListDropdownComponent } from './list/list-dropdown/list-dropdown.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        SharedModule,
        DragDropModule
    ],
    exports: [ListsPageComponent],
    declarations: [
        ListsPageComponent,
        ListComponent,
        TaskComponent,
        AddTaskComponent,
        AddBoardComponent,
        EditTaskComponent,
        PriorityComponent,
        PrioritySelectComponent,
        AddToTaskListComponent,
        ActionsListComponent,
        ListDropdownComponent
    ]
})
export class ListPageModule {}