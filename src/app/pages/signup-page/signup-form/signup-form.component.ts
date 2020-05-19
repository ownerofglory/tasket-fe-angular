import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/shared/models/dto/registeruser.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  userInfo = new RegisterUser();

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.registerUser(this.userInfo).subscribe(success => {
      console.log('registered user', this.userInfo);
      this.router.navigateByUrl('/signup/success');
    },
    error => {

    });
  }

}
