import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root',
})
export class Login {
  /*public user!: User;*/

  user = this.afAuth.authState.pipe(map(authState => {
    //console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }))

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private toastr: ToastrService, private router: Router) {}

  añadirTarjeta(tarjetatodo: string, user: any, category:string){
    console.log(tarjetatodo, user, category);
    const path = `afAuth/${user.uid}/${category}/${tarjetatodo}`
    const c = {
      nombre: tarjetatodo,
      username: user.email
    }
    this.db.object(path).set(c)
    .then((tarjeta) => {
      /*this.router.navigate(['/afAuth/', user, tarjeta]);*/
    })
    .catch((error) => {
        console.log(error);
    });
    
  }
  
  getTarjeta(user: any, category:string) {
    const path = `afAuth/${user.uid}/${category}/`
    //console.log(this.db.list(path).snapshotChanges())
    return this.db.list(path).snapshotChanges();
  }
  
  deleteTarjeta(user: any, category:string, nombre:string){
    //return this.firestore.collection('item').doc(id).delete();
    const path = `afAuth/${user.uid}/${category}/${nombre}`
    return this.db.object(path).remove();
  }

  async loginGoogle(){
    try {
      return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (error) {
         
    }
    return
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }

    return
  }
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
    return
  }
  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
    
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }


 
}