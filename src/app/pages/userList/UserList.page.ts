import { Component } from '@angular/core';
import { UsersService } from '../../services/Users.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './UserList.page.html',
  styleUrls: ['./UserList.page.css']
})

export class UserListPage {

  public dados = [];

  public filterBy: string = '';

  public nameButton: string = '';

  public textOrderBy: string = 'ASC';

  // public orderBy: [];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.dados = [];
    this.usersService.getUsers()
      .subscribe((data: any) => {
        Object.keys(data)
          .forEach((index) => {
            //debugger;
            this.dados.push(data[index].payload.doc.data());
          });
      });
  }


  setFilterBy(event: any) {
    this.filterBy = event.target.value;
  }

  setOrderBy(event: any) {
    this.nameButton = event.target.innerHTML;
    if (this.nameButton === 'ASC') {
      this.nameButton = this.textOrderBy = 'DESC';
    } else {
      this.nameButton = this.textOrderBy = 'ASC';
    }
    event.target.innerHTML = this.nameButton;
  }


}
