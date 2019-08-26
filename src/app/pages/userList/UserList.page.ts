import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/Users.service';
import { ConfirmationDialogService } from '../../services/confirmation-dialog/confirmation-dialog.service';

@Component({
  templateUrl: './UserList.page.html',
  styleUrls: ['./UserList.page.css']
})

export class UserListPage implements OnInit {

  public dados = [];
  public filterBy = '';
  public nameButton = '';
  public textOrderBy = 'ASC';
  public userId = '';
  public docId = '';

  constructor(
    private usersService: UsersService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.usersService.getUsers()
      .subscribe((data: any) => {
        this.dados = [];
        Object.keys(data)
          .forEach((index) => {
            try { this.dados.push(data[index].payload.doc.data()); } catch (e) { console.error(e); }
          });
      });
  }

  goDeleteUser(docID: string) {
    this.usersService.delete(docID);
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

   deleteUser(docID: string) {
    this.confirmationDialogService.confirm('Por Favor Confirme..', 'Você deseja remover ... ?')
      .then((confirmed) => {
        if (confirmed) {
          console.log('User confirmed:', confirmed);
          if ( docID ) {
            this.goDeleteUser(docID);
          }
        }
      })
      .catch(() => console.log('Saindo....'));
  }

}
