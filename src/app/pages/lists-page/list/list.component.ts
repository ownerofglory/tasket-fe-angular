import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { List } from 'src/app/shared/models/list.model';
import { TaskService } from 'src/app/shared/services/task.service';
import { containsElement } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Input() openEditFormEvent: EventEmitter<Task>;


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllByTaskListId(this.list.id).subscribe(success => {
      this.list.tasks = success;
    },
    error => {
      console.error('Error getting tasks', error);
    });
  }

  onDrop(event) {
    console.log('drop element', event);
    //moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
  }

  moveTasks() {

  }

  onTaskAdd(event: Task) {
    event.taskListId = this.list.id;
    this.taskService.create(event).subscribe(success => {
      this.getAllTasks();
    },
    error => {
      console.error('error creating task', event, error);
    });
    //this.list.tasks.push(event);
  }


}
