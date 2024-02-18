import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { NavController } from "@ionic/angular";
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
  
export class ConnexionPage implements OnInit {
  
  email: any;
  password: any;
  
    ngOnInit() {
    }

    constructor(public suivant: Router,
    public AngularFireAuth: AngularFireAuth,
    public NavController: NavController,
    public LoadingCtrl: LoadingController,
    public ToastController: ToastController
  ) { }


   async showToast(message: string, duration: number = 2000) {
  const toast = await this.ToastController.create({
    message: message,
    duration: duration,
    position: 'bottom'
  });

  await toast.present();
  }
  
  async connect() {
    const loading = await this.LoadingCtrl.create({
    message: 'Connexion en cours...',
    });

   
    
    try {
      loading.present()
      const user = await this.AngularFireAuth.signInWithEmailAndPassword(this.email, this.password)
      loading.dismiss()
      await this.showToast('Connecté avec succès', 2000);
      this.NavController.navigateForward('/proprieter')
    } catch (error) {
      loading.dismiss()
      if (!error) {
        await this.showToast('Utilisateur inexistant', 2000);
      } else {
        await this.showToast('Utilisateur inexistant', 2000);
      }
    }
  }
}
