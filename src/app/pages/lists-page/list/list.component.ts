import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { List } from 'src/app/shared/models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  @Input() openEditFormEvent: EventEmitter<Task>;


  constructor() { }

  ngOnInit() {
  }

  onDrop(event) {
    console.log('drop element', event);
    //moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
  }

  moveTasks() {

  }

  onTaskAdd(event: Task) {
    this.list.tasks.push(event);
  }


}
