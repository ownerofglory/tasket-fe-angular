import { Component, OnInit } from '@angular/core';
import { Space } from 'src/app/shared/models/space.model';
import { Board } from 'src/app/shared/models/board.model';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.scss']
})
export class BoardsPageComponent implements OnInit {
  space: Space = {
    id: 1,
    name: 'Awesome space',
    boards:  [
      {
        id: 1,
        name: 'To do',
        description: 'Tasks that must be done',
        tasks: [
          {id: 1, description: 'do smth'},
          {id: 2, description: 'do nothing'},
          {id: 3, description: 'go shopping'},
          {id: 4, description: 'take shower'},
          {id: 5, description: 'eat smth new'}
        ]
      },
      {
        id: 2,
        name: 'In progress',
        description: 'Tasks that are currently in work',
        tasks: [
          {id: 1, description: 'do smth different'},
          {id: 2, description: 'do anything'},
          {id: 3, description: 'go sport'},
          {id: 5, description: 'cook meal'}
        ]
      },
      {
        id: 3,
        name: 'Done',
        description: 'Tasks that are done',
        tasks: [
          {id: 1, description: 'clean up'},
          {id: 2, description: 'feed the dog'},
          {id: 3, description: 'buy stuff'},
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

}
