import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriaProdutoPage } from './categoria-produto.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriaProdutoPage]
})
export class CategoriaProdutoPageModule {}
