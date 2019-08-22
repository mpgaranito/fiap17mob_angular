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
  public userId: string = '';
  public docId: string = '';

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.list();
  }

  private list() {

    console.log(this.dados);
    this.usersService.getUsers()
      .subscribe((data: any) => {
        this.dados = [];
        Object.keys(data)
          .forEach((index) => {
            //debugger;
            try { this.dados.push(data[index].payload.doc.data()); } catch (e) { console.error(e);}
          });
      });
  }

  deleteUser(docID: String) {
    if(confirm("Are you sure to delete ?")) {
      this.usersService.delete(docID);
    }
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
