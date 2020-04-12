import { Component, OnInit, Input } from '@angular/core';
import { Space } from 'src/app/shared/models/space.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  @Input() space: Space;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateToSpace() {
    this.router.navigateByUrl(`spaces/${this.space.id}`);
  }

}
