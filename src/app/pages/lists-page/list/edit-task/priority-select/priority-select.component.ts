import { Component, OnInit } from '@angular/core';
import { TaskPriority } from 'src/app/shared/models/task-priority.enum';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss']
})
export class PrioritySelectComponent implements OnInit {
  priority: TaskPriority;

  constructor() { }

  ngOnInit() {
  }

  changePriority(event) {
    console.log('selected', event);
    this.priority =  event.target.value;
  }
}
