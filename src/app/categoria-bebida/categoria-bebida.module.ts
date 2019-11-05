import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriaBebidaPage } from './categoria-bebida.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaBebidaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriaBebidaPage]
})
export class CategoriaBebidaPageModule {}
