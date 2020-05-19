import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterUser } from 'src/app/shared/models/dto/registeruser.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  userInfo = new RegisterUser();

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.registerUser(this.userInfo).subscribe(success => {
      console.log('registered user');
      this.router.navigateByUrl('/signup/success');
    },
    error => {

    });
  }


}
