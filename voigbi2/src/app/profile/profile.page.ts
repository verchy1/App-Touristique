import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { userInfo } from 'os';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    nom: any;
  prenom: any;
  genre: any;
  email: any;
  mdp: any;
  AdressePhysique: any;
  user: any;


  constructor(
    private NavController: NavController,
    public AngularAuth: AngularFireAuth,
    public afDatabase: AngularFireDatabase,
    public ToaController: ToastController
  ) { 
    this.AngularAuth.user.subscribe(user => {
      this.user = user;
    });
  }

  
  ngOnInit() {
  }



  async showToast(message: string, duration: number = 2000) {
  const toast = await this.ToaController.create({
    message: message,
    duration: duration,
    position: 'bottom',
    color: 'red'
  });

  await toast.present();
  }

  async creation (){
    try {
      const nom = await this.AngularAuth.createUserWithEmailAndPassword(this.email, this.mdp);
      if (nom && nom.user) {
        await nom.user.updateProfile({
          displayName: this.nom
        });

        await this.AngularAuth.signInWithEmailAndPassword(this.email, this.mdp);
        await this.showToast('Modifié avec succès', 2000);

        if (this.AngularAuth) {
          await this.afDatabase.object(`user/${nom.user.uid}`).set({
            Nom: this.nom,
            Prenom: this.prenom,
            Email: this.email,
            Genre: this.genre,
            Mdp: this.mdp,
            Adresse: this.AdressePhysique

          });
        } else {
          await this.showToast('Verifié votre connexion', 2000);
        }
        this.NavController.navigateForward('/proprieter');
      }
    } catch (error) {
      await this.showToast('Cet utilisateur existe déjà', 2000);
    }
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  retour() {
    this.NavController.navigateForward('/proprieter')
  }
}
