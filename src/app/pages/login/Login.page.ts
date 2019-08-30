import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './Login.page.html',
  styleUrls: ['./Login.page.css']
})
export class LoginPageComponent implements OnInit {
  public txtMensagem = '';
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
    if ((login) || (senha)) {
      if (!this.authService.login(login, senha)) {
        this.txtMensagem = 'Usuário e/ou senha inválido.';
      }
    } else {
      this.txtMensagem = 'Favor preencher login e senha corretamente.';
    }
  }
}
