import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() editTaskEvent: EventEmitter<Task>;
  @Input() taskMoveEvent: EventEmitter<Task>;


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTasks();
    this.editTaskEvent.subscribe(event => {
      event.taskListId = this.list.id;
      this.updateTask(event);
    });
    this.taskMoveEvent.subscribe(event => {
      this.getAllTasks();
    });
  }

  getAllTasks() {
    this.taskService.getAllByTaskListId(this.list.id).subscribe(success => {
      this.list.tasks = success;
    },
      error => {
        console.error('Error getting tasks', error);
      });
  }

  updateTask(task: Task) {
    this.taskService.update(task).subscribe(success => {
      this.getAllTasks();
    },
      error => {
        console.log('error updating task', task, error);
      });
  }


  allowDrop(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    console.log(`drop event list${this.list.name}`, event);
    var data = event.dataTransfer.getData('text');
    console.log('transfered data', data);
    var task = JSON.parse(data);
    if (task.taskListId === this.list.id) {
      return;
    }
    task.taskListId = this.list.id;
    this.list.tasks.push(task);
    this.taskService.update(task).subscribe(success => {
      console.log('task moved', task);
      this.taskMoveEvent.emit(task);
    }, error => {
      console.log('error moving task');
    });
  }


  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log('drag over ovent', event);
  }

  onTaskAdd(event: Task) {
    event.taskListId = this.list.id;
    this.taskService.create(event).subscribe(success => {
      this.getAllTasks();
    },
      error => {
        console.error('error creating task', event, error);
      });
  }



}
