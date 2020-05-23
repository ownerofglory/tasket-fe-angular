import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Space } from '../models/space.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private baseUrl = environment.serverUrl +  '/space';

constructor(private httpClient: HttpClient) { }

  getSpacesForUser(): Observable<Space[]> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.get<Space[]>(this.baseUrl, { headers: headers });
  }

  getSpace(id: number): Observable<Space> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.get<Space>(this.baseUrl + `/${id}`, { headers: headers });
  }

  createSpace(space: Space): Observable<any> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.post<Space>(this.baseUrl, space, { headers: headers });
  }

}
