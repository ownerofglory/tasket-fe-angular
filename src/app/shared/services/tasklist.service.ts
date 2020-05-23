import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { List } from '../models/list.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  private baseUrl = environment.serverUrl +  '/tasklist';

  constructor(private httpClient: HttpClient) { }

  getTaskListsForUser(userId: number): Observable<List[]> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.get<List[]>(this.baseUrl, { headers: headers });
  }

  createTaskList(list: List): Observable<any> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json');
    console.log('token', token);
    console.log('json string', JSON.stringify(list));
    return this.httpClient.post<List>(this.baseUrl, JSON.stringify(list), { headers: headers});
  }

}
