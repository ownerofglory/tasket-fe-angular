import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //private baseUrl = 'https://localhost:5001/task';
  private baseUrl = 'https://tasket-monolith-backend.herokuapp.com/task';

  constructor(private httpClient: HttpClient) { }

  getAllByTaskListId(taskListId: number): Observable<Task[]> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.get<Task[]>(this.baseUrl + `?taskListId=${taskListId}`, { headers: headers });
  }

  create(task: Task) {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.post(this.baseUrl, task, { headers: headers });
  }

  update(task: Task): Observable<any> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.put(this.baseUrl, task, { headers: headers });
  }

}
