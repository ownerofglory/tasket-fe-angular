import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginUser } from 'src/app/shared/models/dto/loginuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  creds: LoginUser = new LoginUser();

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login() {

    this.authService.login(this.creds).subscribe(success => {

      console.log('success', success);
      localStorage.setItem('Authentication', success.token);
      this.router.navigateByUrl('/spaces');

    },
    error => {
        //TODO
        console.error('Login error');
    });
  }

}
