import { Component } from '@angular/core';
import { UsersService } from '../../services/Users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import uuid from 'uuid';

@Component({
  templateUrl: './User.page.html',
  styleUrls: ['./User.page.css']
})
export class UserPage {
  userForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    confirmaSenha: new FormControl('', Validators.required),
    bairro: new FormControl(''),
    complemento: new FormControl(''),
    cep: new FormControl('', Validators.required),
  });
  public loading = false;

  public userId = '';
  private docID = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) { this.getUser(this.userId); }
  }

  private getUser(id: string) {

    console.log(id);
    this.usersService.getById(id)
      .subscribe((data: any) => {
        const result = data[0].payload.doc.data();
        const idResult = data[0].payload.doc.id;
        this.docID = idResult;
        console.log('DocumentID ' + idResult);
        Object.keys(result).filter(item => item !== 'id').forEach((item) => {
          this.userForm.controls[item].setValue(result[item]);
        });
        // this.data = data[0].payload.doc.data();
        console.log('getid ', id);
      });
  }
  onSubmit() {

    const data = {
      nome: this.userForm.controls.nome.value,
      cpf: this.userForm.controls.cpf.value,
      email: this.userForm.controls.email.value,
      endereco: this.userForm.controls.endereco.value,
      numero: this.userForm.controls.numero.value,
      senha: this.userForm.controls.senha.value,
      confirmaSenha: this.userForm.controls.confirmaSenha.value,
      bairro: this.userForm.controls.bairro.value,
      complemento: this.userForm.controls.complemento.value,
      cep: this.userForm.controls.cep.value,
      id: null
    };
    console.log(data);
    if (this.userId === null) {
      this.loading = true;
      data.id = uuid();
      this.usersService.create(data).then(() => { this.loading = false; this.router.navigate(['/']); })
        .catch((err) => this.loading = false);
    } else {
      data.id = this.userId;
      this.usersService.update(this.docID, data).then(() => { this.loading = false; this.router.navigate(['/']); })
        .catch((err) => this.loading = false);

    }


  }
}
