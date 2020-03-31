import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { Board } from 'src/app/shared/models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: Board;


  constructor() { }

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<Task[]>) {
    console.log('drop element', event);
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
  }

  moveTasks() {

  }

  onTaskAdd(event: Task) {
    this.board.tasks.push(event);
  }

}
