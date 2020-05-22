import { Component, OnInit, EventEmitter, AfterViewInit, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Space } from 'src/app/shared/models/space.model';
import { List } from 'src/app/shared/models/list.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/shared/models/task.model';
import { TaskPriority } from 'src/app/shared/models/task-priority.enum';
import { TaskLabel, TaskLabelStatus } from 'src/app/shared/models/task-label.model';
import { SpacesMockService } from 'src/app/shared/services/mock/spaces-mock.service';
import { ActivatedRoute } from '@angular/router';
import { SpaceService } from 'src/app/shared/services/space.service';
import { TasklistService } from 'src/app/shared/services/tasklist.service';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.scss']
})
export class ListsPageComponent implements OnInit {
  openEditFormEvent: EventEmitter<Task> = new EventEmitter<Task>();
  editTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();
  taskMoveEvent: EventEmitter<Task> = new EventEmitter<Task>();
  space: Space = new Space();
  spaceId: number;

  constructor(private spaceService: SpaceService, 
    private tasklistService: TasklistService,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      console.log('param', p);
      this.spaceId = p.id;
      this.getBoards(p.id);

    });
  }

  addBoard(event: List) {
    event.spaceId = this.spaceId;
    this.tasklistService.createTaskList(event).subscribe(success => {
      this.getBoards(this.spaceId);
    }, error => {

    });
  }

  getBoards(id: number) {
    this.spaceService.getSpace(id).subscribe(success => {
      this.space = success;
      console.log('space ', success);
    },
    error => {
      console.log('Error getting space');
    });
  }

  onDrop(event: CdkDragDrop<List[]>) {
    moveItemInArray(this.space.taskLists, event.previousIndex, event.currentIndex);
  }

}
