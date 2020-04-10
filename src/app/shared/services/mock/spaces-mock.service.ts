import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Space } from '../../models/space.model';
import { ISpacesService } from '../interfaces/ispaces-service';


@Injectable({
  providedIn: 'root'
})
export class SpacesMockService implements ISpacesService {
  private filePath = 'assets/mocks/spaces-mock.json';

constructor(private httpClient: HttpClient) { }

  getSpaces(): Observable<Space[]> {
    return this.httpClient.get<Space[]>(this.filePath);
  }

}
