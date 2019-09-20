import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IBibliotecaPage } from './i-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: IBibliotecaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IBibliotecaPage]
})
export class IBibliotecaPageModule {}
