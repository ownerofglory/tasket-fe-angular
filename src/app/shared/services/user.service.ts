import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private baseUrl = 'https://localhost:5001/user';
  private baseUrl = 'https://tasket-monolith-backend.herokuapp.com/user';

  constructor(private httpClient: HttpClient) {}


  getCurrentUser(): Observable<User> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.get<User>(this.baseUrl + '/info', { headers: headers });
  }
}
