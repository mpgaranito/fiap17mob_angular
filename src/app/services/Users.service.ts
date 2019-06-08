import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) { }


  getUsers() {
    
    return this.db.collection(
      'users').get();
      }
  getById(id: string) {
    return this.db.collection(
      'users', ref => ref.where('id', '==', id)
    ).snapshotChanges() ;
  }
  update(docId: string, data) {
    console.log(data);
    return this.db.collection('users').doc(docId).set(data);
  }
  
  create(data) {
    return this.db.collection('users').add({
      id: uuid(),
      ...data,
    });
  }
}
