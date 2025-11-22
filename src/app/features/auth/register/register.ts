import { Component } from '@angular/core';
import {Auth} from '../../../core/services/auth';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username: string =''
  email: string = ''
  password: string = ''
  confirmPassword: string = ''
  showPassword: boolean = false;
  error: string = '';

  constructor(private authService: Auth,
  private router:Router
  ) {}

  onRegister(){
    if(this.authService.register(this.username, this.email, this.password)){
      alert('Usuario registrado correctamente');
      this.router.navigate(['auth/login']);
    }else{
      this.error = 'completa los campos por favor'
    }
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
   }

}
