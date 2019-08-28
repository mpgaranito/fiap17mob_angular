import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'header-component',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent {

  constructor(

    public url: LocationStrategy,
    private authService: AuthService,
    public router: Router
  ) {

  }
  goback() {
    this.url.back();
  }
  exit() {
    this.authService.logout();
  }

}
