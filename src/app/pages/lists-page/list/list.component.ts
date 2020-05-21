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
  @Input() editTaskEvent: EventEmitter<Task>;
  @Input() listNamesForCdk: string[];
  @Input() cdkIndex: number;
  connectedToStringForCdk = '[]';


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTasks();
    this.editTaskEvent.subscribe(event => {
      event.taskListId = this.list.id;
      this.updateTask(event);
    });
  }

  getAllTasks() {
    this.taskService.getAllByTaskListId(this.list.id).subscribe(success => {
      this.list.tasks = success;

      this.createConnectedToStringForCdk();
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

  onDrop(event: CdkDragDrop<Task[]>) {
    console.log('drop element', event);
    if (event.previousContainer === event.container) {
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.container.data[event.currentIndex] = event.previousContainer.data[event.previousIndex];
    }
    //moveItemInArray(this.list.tasks, event.previousIndex, event.currentIndex);
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    console.log(`drop event list${this.list.name}`, event);
    var data = event.dataTransfer.getData("text");
    console.log('transfered data', data);
    var task = JSON.parse(data);
    task.taskListId = this.list.id;
    this.list.tasks.push(task);
    //ev.target.appendChild(document.getElementById(data));
  }

  onCustomDrop(event) {
    event.preventDefault();
    console.log('custom drop event', event);
  }

  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log('drag over ovent', event);
  }

  drag(event) {

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
  }

  createConnectedToStringForCdk() {
    const currentName = `cdk-drop-list-${this.cdkIndex}`;
    const connectedToArray = this.listNamesForCdk.filter(listName => listName !== currentName);
    this.connectedToStringForCdk = '[';
    for (let i = 0; i < connectedToArray.length; i++) {
      this.connectedToStringForCdk += connectedToArray[i];
      if (i !== connectedToArray.length - 1) {
        this.connectedToStringForCdk += ',';
      }
    }
    this.connectedToStringForCdk += ']';
  }


}
