import { Component, OnInit } from '@angular/core';
import { SpacesMockService } from 'src/app/shared/services/mock/spaces-mock.service';
import { Space } from 'src/app/shared/models/space.model';
import { SpaceService } from 'src/app/shared/services/space.service';

@Component({
  selector: 'app-spaces-page',
  templateUrl: './spaces-page.component.html',
  styleUrls: ['./spaces-page.component.scss']
})
export class SpacesPageComponent implements OnInit {
  spaces: Space[];

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
    var spaces = [];
    this.spaceService.getSpacesForUser().subscribe(success => {
      console.log('success', success);
      this.spaces = success;
    }, error => {
      console.log('error', error);
    });
  }

}
