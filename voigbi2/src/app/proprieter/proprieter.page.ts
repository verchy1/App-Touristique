import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-proprieter',
  templateUrl: './proprieter.page.html',
  styleUrls: ['./proprieter.page.scss'],
})
  
export class ProprieterPage implements OnInit {

  constructor(
    public AngularAuth: AngularFireAuth,
    public ToastController: ToastController,
    public suivant: NavController
  ) {
    this.AngularAuth.user.subscribe(user => {
      this.user = user;
    });
  }

   async showToast(message: string, duration: number = 2000) {
  const toast = await this.ToastController.create({
    message: message,
    duration: duration,
    position: 'bottom',
    cssClass: 'custom-toast'
  });

     
  await toast.present();
  }

  ngOnInit() {
  }

  user: firebase.User | null = null;

  async deconnect() {
  try {
    await this.AngularAuth.signOut();
    await this.showToast('Déconnecté avec succès', 2000);
    this.suivant.navigateForward('/proprieter')
  } catch (error) {
    await this.showToast('Erreur lors de la déconnexion', 2000);
  }
  }
  
  connection() {
    this.showToast('connecté vous', 4000);
    this.suivant.navigateForward('/home')
  }

  profile() {
    this.suivant.navigateForward('/profile')
  }

  home() {
    this.suivant.navigateForward('/proprieter')
  }
  swiperModules = [IonicSlides];

  isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
}

