import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User' // optional
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  userNuevo:any;
  
  constructor(private afAuth: AngularFireAuth,private db: AngularFirestore,private router: Router) {
      
    
  }

  logged(){
      return this.afAuth.authState.pipe(map(auth=> auth));
  }

  getUserState(){
    return this.afAuth.authState;
  }
  crearUser(user){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(userCred => {
      this.userNuevo = user;

      userCred.user.updateProfile({
        displayName : user.firstName + ' '+user.lastName
      });

      this.addData(userCred).then(()=>{

        this.router.navigate(['/productos']);
      
      }).catch(error => {
          console.log("ERROR CREAR USUARIO: "+error)
      })
    })
  };

  addData(userCred : firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCred.user.uid}`).set({
      
      firstName : this.userNuevo.firstName,
      lastName : this.userNuevo.lastName,
      email : this.userNuevo.email,
      password : this.userNuevo.password
    
    });
  }
  login(email,password){
      this.afAuth.auth.signInWithEmailAndPassword(email,password).then(res=>{
        if(res){
            this.router.navigate(['/productos']);
        }
      })
  }


  logout(){
    return this.afAuth.auth.signOut(); 
  }

 
  
}
