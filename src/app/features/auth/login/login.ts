import { Component } from '@angular/core';
import {Auth} from '../../../core/services/auth';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string =''
  password: string = ''
  showPassword: boolean = false;
  error: string = '';

    constructor(private authService: Auth , private router:Router) {}

  onLogin(){
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/compras']);
    } else {
      this.error = 'Completa todos los campos';
    }
  }

   toggleShowPassword(){
    this.showPassword = !this.showPassword;
   }

}
