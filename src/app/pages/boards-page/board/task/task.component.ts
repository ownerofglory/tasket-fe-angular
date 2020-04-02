import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() openEditFormEvent: EventEmitter<Task>;

  constructor() { }

  ngOnInit() {
  }

  openEditForm() {
    this.openEditFormEvent.emit(this.task);
  }


  dragStart(event, task: Task) {
    console.log('drag start event', event);
    console.log('task', task);
  }

  dragEnd(event) {
    console.log('drag end event', event);
  }

}
