import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss']
})
export class PrioritySelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changePriority(event) {
    console.log('selected', event);
  }
}
