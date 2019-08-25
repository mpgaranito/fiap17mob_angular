import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

import { Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: Observable<firebase.User>;

  private isUserLogged: boolean = false;

  constructor(private firebaseAuth: AngularFireAuth) {
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
        console.log('Erro..:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Usuario logado');
        this.isUserLogged = true;
      })
      .catch(err => {
        console.log('Erro..:',err.message);
        this.isUserLogged = false;
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.isUserLogged = false;
  }

  isLogged(){
    return this.isUserLogged;
  }

}