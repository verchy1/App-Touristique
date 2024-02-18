import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from "@ionic/angular";
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  nom: any;
  prenom: any;
  genre: any;
  email: any;
  mdp: any;
  AdressePhysique: any;

  constructor(
    public Auth: AngularFireAuth,
    public DatabaseModule: AngularFireDatabase,
    public NavCtrl: NavController,
    public LoadingCtrl: LoadingController,
    public ToastController: ToastController

  ) { }

  ngOnInit() {
  }

  

  async showToast(message: string, duration: number = 2000) {
  const toast = await this.ToastController.create({
    message: message,
    duration: duration,
    position: 'bottom',
    color: 'red'
  });

  await toast.present();
  }

  async creation (){
    try {
      const nom = await this.Auth.createUserWithEmailAndPassword(this.email, this.mdp);
      if (nom && nom.user) {
        await nom.user.updateProfile({
          displayName: this.nom
        });

        await this.Auth.signInWithEmailAndPassword(this.email, this.mdp);
        await this.showToast('Connecté avec succès', 2000);

        if (this.Auth) {
          await this.DatabaseModule.object(`user/${nom.user.uid}`).set({
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
        this.NavCtrl.navigateForward('/proprieter');
      }
    } catch (error) {
      await this.showToast('Cet utilisateur existe déjà', 2000);
    }
  }
}
