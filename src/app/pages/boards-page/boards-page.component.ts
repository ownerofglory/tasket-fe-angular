import { Component, OnInit, EventEmitter } from '@angular/core';
import { Space } from 'src/app/shared/models/space.model';
import { Board } from 'src/app/shared/models/board.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { TaskPriority } from 'src/app/shared/models/task-priority.enum';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.scss']
})
export class BoardsPageComponent implements OnInit {
  openEditFormEvent: EventEmitter<Task> = new EventEmitter<Task>();
  space: Space = {
    id: 1,
    name: 'Awesome space',
    boards:  [
      {
        id: 1,
        name: 'To do',
        description: 'Tasks that must be done',
        tasks: [
          {id: 1, description: 'do smth', priority: TaskPriority.High},
          {id: 2, description: 'do nothing', priority: TaskPriority.High},
          {id: 3, description: 'go shopping', priority: TaskPriority.Medium},
          {id: 4, description: 'take shower', priority: TaskPriority.Low},
          {id: 5, description: 'eat smth new', priority: TaskPriority.High}
        ]
      },
      {
        id: 2,
        name: 'In progress',
        description: 'Tasks that are currently in work',
        tasks: [
          {id: 1, description: 'do smth different', priority: TaskPriority.Low},
          {id: 2, description: 'do anything', priority: TaskPriority.Medium},
          {id: 3, description: 'go sport', priority: TaskPriority.High},
          {id: 5, description: 'cook meal', priority: TaskPriority.Low}
        ]
      },
      {
        id: 3,
        name: 'Done',
        description: 'Tasks that are done',
        tasks: [
          {id: 1, description: 'clean up', priority: TaskPriority.Medium},
          {id: 2, description: 'feed the dog', priority: TaskPriority.High},
          {id: 3, description: 'buy stuff', priority: TaskPriority.Low},
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  addBoard(event: Board) {
      this.space.boards.push(event);
  }

  onDrop(event: CdkDragDrop<Board[]>) {
    moveItemInArray(this.space.boards, event.previousIndex, event.currentIndex);
  }

}
