import { Component, OnInit, EventEmitter } from '@angular/core';
import { Space } from 'src/app/shared/models/space.model';
import { List } from 'src/app/shared/models/list.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { TaskPriority } from 'src/app/shared/models/task-priority.enum';
import { TaskLabel, TaskLabelStatus } from 'src/app/shared/models/task-label.model';
import { SpacesMockService } from 'src/app/shared/services/mock/spaces-mock.service';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.scss']
})
export class ListsPageComponent implements OnInit {
  openEditFormEvent: EventEmitter<Task> = new EventEmitter<Task>();
  space: Space = {
    id: 1,
    name: 'Awesome space',
    lists:  [
      {
        id: 1,
        name: 'To do',
        description: 'Tasks that must be done',
        tasks: [
          {id: 1, description: 'do smth', priority: TaskPriority.High, attendees: [ { firstName: 'John', lastName: 'Doe', imageThumbnailUrl: 'https://randomuser.me/api/portraits/thumb/men/75.jpg', imageUrl: '' } ], labels: [ {name: 'primary', status: TaskLabelStatus.PRIMARY} ]},
          {id: 2, description: 'do nothing', priority: TaskPriority.High, attendees: [], labels: [ {name: 'secondary', status: TaskLabelStatus.SECONDARY} ]},
          {id: 3, description: 'go shopping', priority: TaskPriority.Medium, attendees: [{ firstName: 'John', lastName: 'Doe', imageThumbnailUrl: 'https://randomuser.me/api/portraits/thumb/men/75.jpg', imageUrl: '' }, { firstName: 'Bobby', lastName: 'Bowman', imageThumbnailUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg', imageUrl: '' }], labels: []},
          {id: 4, description: 'take shower', priority: TaskPriority.Low, attendees: [] , labels: []},
          {id: 5, description: 'eat smth new', priority: TaskPriority.High, attendees: [], labels: [{name: 'primary', status: TaskLabelStatus.PRIMARY}, {name: 'info', status: TaskLabelStatus.INFO}]}
        ]
      },
      {
        id: 2,
        name: 'In progress',
        description: 'Tasks that are currently in work',
        tasks: [
          {id: 1, description: 'do smth different', priority: TaskPriority.Low, attendees: [], labels: []},
          {id: 2, description: 'do anything', priority: TaskPriority.Medium, attendees: [{ firstName: 'Milton', lastName: 'Green', imageThumbnailUrl: 'https://randomuser.me/api/portraits/thumb/men/36.jpg', imageUrl: '' }, { firstName: 'Rene', lastName: 'Hawkins', imageThumbnailUrl: 'https://randomuser.me/api/portraits/thumb/men/8.jpg', imageUrl: '' }, { firstName: 'Calvin', lastName: 'Rose', imageThumbnailUrl: 'https://randomuser.me/api/portraits/thumb/men/39.jpg', imageUrl: '' }], labels: [{name: 'warning', status: TaskLabelStatus.WARNING}, {name: 'primary', status: TaskLabelStatus.PRIMARY}, {name: 'success', status: TaskLabelStatus.SUCCESS}]},
          {id: 3, description: 'go sport', priority: TaskPriority.High, attendees: [], labels: [{name: 'dark', status: TaskLabelStatus.DARK}, {name: 'danger', status: TaskLabelStatus.DANGER}]},
          {id: 5, description: 'cook meal', priority: TaskPriority.Low, attendees: [], labels: []}
        ]
      },
      {
        id: 3,
        name: 'Done',
        description: 'Tasks that are done',
        tasks: [
          {id: 1, description: 'clean up', priority: TaskPriority.Medium, attendees: [], labels: [{name: 'info', status: TaskLabelStatus.INFO}, {name: 'dark', status: TaskLabelStatus.DARK}]},
          {id: 2, description: 'feed the dog', priority: TaskPriority.High, attendees: [], labels: []},
          {id: 3, description: 'buy stuff', priority: TaskPriority.Low, attendees: [{ firstName: 'Rene', lastName: 'Hawkins', imageThumbnailUrl: 'https://randomuser.me/api/portraits/thumb/men/8.jpg', imageUrl: '' }], labels: [{name: 'light', status: TaskLabelStatus.LIGHT}]},
        ]
      }
    ]
  };

  constructor(private spacesService: SpacesMockService) { }

  ngOnInit() {
    var spaces = [];
    this.spacesService.getSpaces().subscribe(success => {
      console.log('success', success);
      this.space = success[0];
    }, error => {
      console.log('error', error);
    });
    //console.info(spaces);
    //this.space = spaces[0];
  }

  addBoard(event: List) {
      this.space.lists.push(event);
  }

  onDrop(event: CdkDragDrop<List[]>) {
    moveItemInArray(this.space.lists, event.previousIndex, event.currentIndex);
  }

}
