import { Component } from '@angular/core';
import { UsersService } from '../../services/Users.service';

@Component({
  templateUrl: './UserList.page.html',
  styleUrls: ['./UserList.page.css']
})

export class UserListPage {
  
  public dados = [];

  constructor(
    private usersService: UsersService
     ) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.usersService.getUsers()
      .subscribe((data: any) => {
       data.forEach(element => this.dados.push(element.data()));
      });
    }

  setFilterBy(event: any) {
    //this.filterBy = event.target.value;

  }

}
