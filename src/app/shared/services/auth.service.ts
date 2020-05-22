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
  //private baseUrl = 'https://localhost:5001/auth';
  private baseUrl = 'https://tasket-monolith-backend.herokuapp.com/auth';

  constructor(private httpClient: HttpClient) {}

  registerUser(userInfo: RegisterUser): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/register', userInfo);
  }

  login(creds: LoginUser): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/authenticate', creds);
  }

}
