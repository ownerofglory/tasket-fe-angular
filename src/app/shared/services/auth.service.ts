import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/dto/loginuser.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { RegisterUser } from '../models/dto/registeruser.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.serverUrl +  '/auth';

  constructor(private httpClient: HttpClient) {}

  registerUser(userInfo: RegisterUser): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/register', userInfo);
  }

  login(creds: LoginUser): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/authenticate', creds);
  }

}
