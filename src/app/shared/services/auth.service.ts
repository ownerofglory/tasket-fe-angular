import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/dto/loginuser.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { RegisterUser } from '../models/dto/registeruser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:5001/user';

  constructor(private httpClient: HttpClient) {}

  registerUser(userInfo: RegisterUser): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/register', userInfo);
  }

  login(creds: LoginUser): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/authenticate', creds);
  }

  getCurrentUser(): Observable<User> {
    const token = localStorage.getItem('Authentication');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);
    console.log('token', token);

    return this.httpClient.get<User>(this.baseUrl + '/info', { headers: headers });
  }

}
