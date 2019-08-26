import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './Login.page.html',
  styleUrls: ['./Login.page.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

  }

  ngOnInit() {
    if (this.authService.isLogged) {
      this.router.navigate(['/userlist']);
    }
  }

  efetuaLogin(login: string, senha: string) {
    console.log(login + '' + senha);
    this.authService.login(login, senha);
    console.log('this:' + this.authService.isLogged());
  }
}
