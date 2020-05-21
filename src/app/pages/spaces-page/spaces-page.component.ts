import { Component, OnInit, EventEmitter } from '@angular/core';
import { SpacesMockService } from 'src/app/shared/services/mock/spaces-mock.service';
import { Space } from 'src/app/shared/models/space.model';
import { SpaceService } from 'src/app/shared/services/space.service';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-spaces-page',
  templateUrl: './spaces-page.component.html',
  styleUrls: ['./spaces-page.component.scss']
})
export class SpacesPageComponent implements OnInit {
  spaces: Space[];
  user: User;

  constructor(private userService: UserService,
    private spaceService: SpaceService) { }

  ngOnInit() {
    var spaces = [];
    this.getCurrentUser();

    this.getSpaces();
  }

  getSpaces() {
    this.spaceService.getSpacesForUser().subscribe(success => {
      console.log('success', success);
      this.spaces = success;
    }, error => {
      console.log('error', error);
    });
  }

  getCurrentUser() {
    this.userService.getCurrentUser()
      .subscribe(success => this.user = success,
                error => console.error('error', error));
  }

  onAddSpace(event: Space) {
    event.userId = this.user.id;
    this.spaceService.createSpace(event).subscribe(success => {
      console.log('Space created');
      this.getSpaces();
    },
    error => console.error('Error creating space', event, error));
  }

}
