import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProprieterPageRoutingModule } from './proprieter-routing.module';

import { ProprieterPage } from './proprieter.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProprieterPageRoutingModule
  ],
  declarations: [ProprieterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProprieterPageModule {}
