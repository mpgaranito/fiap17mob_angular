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
    this.dados = [];
        this.usersService.getUsers()
            .subscribe((data: any) => {
              Object.keys(data)
                 .forEach((index) => {
                   console.log(data[index].payload.doc.data());
                  this.dados.push(data[index].payload.doc.data());
                });   
            });
    }

  setFilterBy(event: any) {
    //this.filterBy = event.target.value;

  }

}
