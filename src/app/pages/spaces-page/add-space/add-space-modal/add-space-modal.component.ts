import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Space } from 'src/app/shared/models/space.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-space-modal',
  templateUrl: './add-space-modal.component.html',
  styleUrls: ['./add-space-modal.component.scss']
})
export class AddSpaceModalComponent implements OnInit {
  @Output() addSpaceEvent: EventEmitter<Space> = new EventEmitter<Space>();
  space: Space = new Space();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  createSpace() {
    const spaceToCreate = new Space();
    spaceToCreate.name = this.space.name;
    this.addSpaceEvent.emit(spaceToCreate);

    this.space = new Space();
   // this.router.navigateByUrl('/spaces');
  }

}
