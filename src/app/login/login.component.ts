import { Component } from '@angular/core';
import { WhmcsService } from '../whmcs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private whmcsService: WhmcsService, private router: Router) {}

  login() {
    this.whmcsService.login(this.username, this.password).subscribe(response => {
      if (response.result === 'success') {
        localStorage.setItem('clientId', response.clientId);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
