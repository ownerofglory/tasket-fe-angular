import { Component, OnInit, OnDestroy, EventEmitter, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnDestroy {
  @Input() openEditFormEvent: EventEmitter<Task>;
  taskToEdit: Task = new Task;

  constructor() { }

  ngOnInit() {
    this.openEditFormEvent.subscribe(event => {
      console.log('task to edit', event);
      this.taskToEdit.description = event.description;
      this.taskToEdit.id = event.id;
    });
  }

  ngOnDestroy() {
    this.openEditFormEvent.unsubscribe();
  }

  onFocus(event) {
    console.log('Focus pokus', event);
  }

}
