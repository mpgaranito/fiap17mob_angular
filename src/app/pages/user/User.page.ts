import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/Users.service';
import uuid from 'uuid';

@Component({
    templateUrl: './User.page.html',
    styleUrls: ['./User.page.css']
})

export class UserPage {

    public loading: boolean = false;
    public userId: string = '';
    public docId: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
       // public payload: any = null
    ) { }

    userForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl(''),
      cep: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmaSenha: new FormControl('', Validators.required),
      complemento: new FormControl(''),
  })

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');

        if (this.userId) {
            this.getUser(this.userId);
        }
    }

    private getUser(id: string) {
        this.loading = true;
        this.usersService.getById(id)
            .subscribe((data: any) => {
              console.info(data);
             var result = data[0];
             this.docId = result.id;
                Object.keys(result)
                    .filter(item => item !== 'id')
                    .forEach((item) => {
                        this.userForm.controls[item].setValue(result[item]);
                        this.loading = false;
                    });
            });

    }

    onSubmit() {


    const data = {
      nome: this.userForm.controls["nome"].value,
      cpf: this.userForm.controls["cpf"].value,
      email: this.userForm.controls["email"].value,
      endereco: this.userForm.controls["endereco"].value,
      numero: this.userForm.controls["numero"].value,
      senha: this.userForm.controls["senha"].value,
      confirmaSenha: this.userForm.controls["confirmaSenha"].value,
      bairro: this.userForm.controls["bairro"].value,
      complemento: this.userForm.controls["complemento"].value,
      cep: this.userForm.controls["cep"].value,
      id: null
    };
    console.log(data);
    if (this.userId === null) {
      this.loading = true;
      data.id = uuid();
      this.usersService.create(data).then(() => { this.loading = false; this.router.navigate(['/userlist']); })
        .catch((err) => this.loading = false);
    } else {
      data.id = this.userId;
      this.usersService.update(this.docId, data).then(() => { this.loading = false; this.router.navigate(['/userlist']); })
        .catch((err) => this.loading = false);

    }


  }
}
