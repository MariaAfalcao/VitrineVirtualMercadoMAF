import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriaAlimentoPage } from './categoria-alimento.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaAlimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriaAlimentoPage]
})
export class CategoriaAlimentoPageModule {}
