import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() boardId: number;
  @Output() taskAddEvent: EventEmitter<Task> = new EventEmitter<Task>();
  taskModel: Task = new Task();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    const newTask = new Task();
    newTask.description = this.taskModel.description;
    console.log('new task', newTask);
    this.taskAddEvent.emit(newTask);
    this.taskModel = new Task();
  }
}
