import { Component, OnInit, EventEmitter } from '@angular/core';
import { Space } from 'src/app/shared/models/space.model';

@Component({
  selector: 'app-add-space',
  templateUrl: './add-space.component.html',
  styleUrls: ['./add-space.component.scss']
})
export class AddSpaceComponent implements OnInit {
  openAddSpaceFormEvent: EventEmitter<any> = new EventEmitter<any>();
  addSpaceEvent: EventEmitter<Space> = new EventEmitter<Space>();

  constructor() { }

  ngOnInit() {
  }

}
