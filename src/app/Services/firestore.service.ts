import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createDoc(){
    this.firestore.collection('Estudiantes')
  }
  
  getCollection(){

    console.log('estoy por leer una coleccion');

    this.firestore.collection('Estudiantes').get().subscribe ( (res) =>{

    })
  }

}
