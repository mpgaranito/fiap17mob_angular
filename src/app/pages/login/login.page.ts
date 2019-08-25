import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

  }

  ngOnInit() {
    if( this.authService.isLogged){
      this.router.navigate(['/userlist']);
    }
  }

  efetuaLogin(login: string, senha: string) {
    console.log(login + '' + senha);
    this.authService.login(login, senha);
    console.log('this:'+this.authService.isLogged());
  }
}
