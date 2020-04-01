import { Component, OnInit, Input } from '@angular/core';
import { TaskPriority } from 'src/app/shared/models/task-priority.enum';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {
  @Input() priority: TaskPriority;
  iconClass = 'fa-equals';
  color = 'black';
  style = {color: this.color}

  constructor() { }

  ngOnInit() {
    this.setIconClass(this.priority);
  }

  setIconClass(priority: TaskPriority) {
    switch (priority) {
      case TaskPriority.Low:
        this.iconClass = 'fa-angle-double-down';
        this.color = 'green';
        break;
      case TaskPriority.Medium:
          this.iconClass = 'fa-equals';
          this.color = 'black';
      break;
      case TaskPriority.High:
        this.iconClass = 'fa-angle-double-up';
        this.color = 'red';
      break;
    }
  }

}
