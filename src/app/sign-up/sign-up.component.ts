import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signup() {
    this.authService.signUp({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }).subscribe();
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }
}
