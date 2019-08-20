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

    getById(id: String) {
       // return this.db.collection('users', ref => ref.where('id', '==', id)).snapshotChanges(); //Parou de funcionar 
      return this.db.collection('users', ref => ref.where('id', '==', id))
       .valueChanges({ idField: 'id' });
    }

    getUsers() {
        return this.db.collection('users').snapshotChanges();
    }

    create(data) {
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