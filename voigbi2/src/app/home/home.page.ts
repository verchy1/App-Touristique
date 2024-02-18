import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    private NavCtrl: NavController
  ) { }
  
  passer() {
    this.NavCtrl.navigateForward('/proprieter')
  }

  swiperModules = [IonicSlides];
}
