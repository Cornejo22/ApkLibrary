import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PruebaSplashPage } from './prueba-splash.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaSplashPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PruebaSplashPage]
})
export class PruebaSplashPageModule {}
