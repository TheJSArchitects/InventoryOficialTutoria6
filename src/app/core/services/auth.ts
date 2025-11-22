import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private currentUser : string = '';

  login(username: string, password: string):boolean{
    if(username && password){
      this.currentUser = username;
      return true;
    }
    return false;
  }

  register(username:string,email:string ,password:string):boolean{
    if(username && email && password){
      console.log('Usuario registrado correctamente', username)
      return true;
    }
    return false;
  }

  getUser():string{
    return this.currentUser;
  }



}
