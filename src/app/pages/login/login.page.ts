import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './Login.page.html',
  styleUrls: ['./Login.page.css']
})
export class LoginPageComponent implements OnInit {
  private txtMensagem = '';
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
      console.log(login + '' + senha);
      if (this.authService.login(login, senha)) {
        console.log('this is:' + this.authService.isLogged());
      } else {
        this.txtMensagem = 'Usuário e/ou senha inválido.';
        console.log('this not is:' + this.authService.isLogged());
      }
    } else {
      this.txtMensagem = 'Favor preencher login e senha corretamente.';
    }
  }
}
