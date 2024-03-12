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
  signInError: boolean = false;
  credentials: IUserCredentials = { email: '', password: '' };
  constructor(private userService: UserService, private router: Router) {}
  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/products']),
      error: () => (this.signInError = true),
    });
  }
}
