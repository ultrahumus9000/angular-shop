import { Component } from '@angular/core';
import { IUserCredentials } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  constructor(private userService: UserService, private router: Router) {}
  signIn() {
    this.userService
      .signIn(this.credentials)
      .subscribe({ next: () => this.router.navigate(['/products']) });
  }
}
