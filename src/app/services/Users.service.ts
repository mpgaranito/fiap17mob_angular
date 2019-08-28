import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import uuid from 'uuid';


@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
    private authservice: AuthService,

  ) { }

 
  getById(id: string) {
    // return this.db.collection('users', ref => ref.where('id', '==', id)).snapshotChanges(); //Parou de funcionar
    return this.db.collection('users', ref => ref.where('id', '==', id))
      .valueChanges({ idField: 'id' });
  }

  delete(id) {
    const x = this.db.collection('users', ref => ref.where('id', '==', id))
      .valueChanges({ idField: 'id' }).subscribe((data: any) => {
        const result = data[0];
        if  (result) {
          this.db.collection('users').doc(result.id).delete();
          console.log('Apaguei' + result.id);
        }
      });
  }

  getUsers() {
    return this.db.collection('users', ref => ref.where('email', '>', 'admin@admin.com.br')).snapshotChanges();
    // return this.db.collection('users').snapshotChanges();
  }

  create(data) {
    this.authservice.signup(data.email, data.senha);
    return this.db.collection('users').add(
      {
        id: uuid(),
        ...data
      });
  }

  update(docId, data) {
    return this.db.collection('users').doc(docId).update(
      {
        ...data
      });
  }
}
