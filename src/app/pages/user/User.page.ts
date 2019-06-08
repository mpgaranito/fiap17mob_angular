import { Component } from '@angular/core';
import { UsersService } from '../../services/Users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  templateUrl: './User.page.html',
  styleUrls: ['./User.page.css']
})
export class UserPage {
  userForm = new FormGroup({
    name: new FormControl('name', Validators.required)
  });
  private loading: boolean  = false;
 // private data: object = {};
  private userId: string ="";


  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}
  
  private getUser(id: string) {

  this.usersService.getById(id)
    .subscribe((data: any) => {
      // this.data = data[0].payload.doc.data();
      console.log('getid', id);
    });
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUser(this.userId); 
  }
   
  createUser() {
    console.log(this.userForm);
      return;
    this.loading = true;
    this.usersService.create({
      name: 'marcos',
      email: 'marcos@gmail.com',
      age: 36,
      phone: '+1111111111'
    }).then(() => this.loading = false)
      .catch((err) => this.loading = false);
  }
}
