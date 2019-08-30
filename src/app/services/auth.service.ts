import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: Observable<firebase.User>;

  // private isUserLogged = false;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
  ) {
    this.user = firebaseAuth.authState;
  }

  getByEmail(email: string) {
    return this.db.collection('users', ref => ref.where('email', '==', email)).valueChanges();
  }

  signup(email: string, password: string) {

    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
      })
      .catch(err => {
        console.error('Erro..:', err.message);
      });
  }

  writeUser(value: boolean) {
    localStorage.setItem('logado', '' + value + '');
  }

  login(email: string, password: string): boolean {
    const getEmailDataBase = this.getByEmail(email).subscribe((data: any) => {

      const result = data[0];
      // this.db.collection('users').doc(result.id).delete();
      // this.authservice.deleteUserByMail(result.email);
      if (result) {
        this.firebaseAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            this.writeUser(true);
            if (this.isLogged()) {
              this.router.navigate(['/userlist']);
              return true;
            }
          })
          .catch(err => {
            console.error('Erro..:', err.message);
            this.writeUser(false);
            return false;
          });
        return false;
      }
    });
    return false;
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    this.writeUser(false);
    this.router.navigate(['/']);
  }
  isLogged(): boolean {
    const result = JSON.parse(localStorage.getItem('logado'));
    return result;
  }
}
