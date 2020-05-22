import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { List } from '../models/list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  //private baseUrl = 'https://localhost:5001/tasklist';
  private baseUrl = 'https://tasket-monolith-backend.herokuapp.com/tasklist';

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
