/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpacesMockService } from './spaces-mock.service';

describe('Service: SpacesMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacesMockService]
    });
  });

  it('should ...', inject([SpacesMockService], (service: SpacesMockService) => {
    expect(service).toBeTruthy();
  }));
});
