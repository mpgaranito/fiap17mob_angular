import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {  Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: Observable<firebase.User>;

  private isUserLogged: boolean = false;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    ) {
    this.user = firebaseAuth.authState; 
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucesso!', value);
      })
      .catch(err => {
        console.log('Erro..:', err.message);
      });
  }

  writeUser(value: boolean) {
    localStorage.setItem('logado', '' + value + '');
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Usuario logado');
        this.writeUser(true);
        if(this.isLogged()){
          this.router.navigate(['/userlist']);
        }
      })
      .catch(err => {
        console.log('Erro..:', err.message);
        this.writeUser(false);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    this.writeUser(false);
  }
  isLogged(): boolean {
    
    const result = JSON.parse(localStorage.getItem('logado'));
    console.log("Usuario" + result)
    return result;
  }

}