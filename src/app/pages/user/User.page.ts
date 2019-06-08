import { Component } from '@angular/core';
import { UsersService } from '../../services/Users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  templateUrl: './User.page.html',
  styleUrls: ['./User.page.css']
})
export class UserPage {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)

  });
    private loading: boolean  = false;

    private userId: string = "";
    private docID: string = "";


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }
  
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if(this.userId) this.getUser(this.userId); 
  }
   
  private getUser(id: string) {

  this.usersService.getById(id)
    .subscribe((data: any) => {
        const result = data[0].payload.doc.data();
        const idResult = data[0].payload.doc.id;
        this.docID = idResult;
        console.info("DocumentID " +idResult)
       
      Object.keys(result).filter(item=>item!=='id').forEach((item) => {
      this.userForm.controls[item].setValue(result[item]);
     });
      // this.data = data[0].payload.doc.data();
      console.log('getid ', id);
    });
  }
    onSubmit() {
      debugger  
      const data = {
            name: this.userForm.controls["name"].value,
            email: this.userForm.controls["email"].value,
            age: this.userForm.controls["age"].value,
            phone: this.userForm.controls["phone"].value,
        };
        if (this.userId === null) {
             this.loading = true;
            this.usersService.create(data).then(() => { this.loading = false; this.router.navigate(['/']) })
                .catch((err) => this.loading = false);
        } else {
          data.id = this.userId;
          this.usersService.update(this.docID, data).then(() => { this.loading = false; this.router.navigate(['/']) })
               .catch((err) => this.loading = false);
              
        }
        
       
  }
}
