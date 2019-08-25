import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {

  constructor(
    private authService: AuthService
    ) 
    { 

    }

  ngOnInit() {
  }

  efetuaLogin(login: any,senha: any){
    debugger;
  console.log(login + ''+senha);
  }

}
