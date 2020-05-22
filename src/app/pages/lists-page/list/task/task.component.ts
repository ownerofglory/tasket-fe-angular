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
  dragToogle = false;

  constructor() { }

  ngOnInit() {
  }

  openEditForm() {
    this.openEditFormEvent.emit(this.task);
  }


  dragStart(event) {
    event.dataTransfer.setData('text/plain', JSON.stringify(this.task));
    console.log(`drag start event task ${this.task.title}`, event);
    console.log('task', this.task);
    this.dragToogle = !this.dragToogle;
  }

  dragEnd(event) {
    console.log('drag end event', event);
    this.dragToogle = !this.dragToogle;
  }

  dragExit(event) {
    console.log('drag exit event', event);
    this.dragToogle = !this.dragToogle;
  }

}
