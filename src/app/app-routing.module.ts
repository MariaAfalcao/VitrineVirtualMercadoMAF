import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'categoria-alimento', loadChildren: './categoria-alimento/categoria-alimento.module#CategoriaAlimentoPageModule' },
  { path: 'categoria-bebida', loadChildren: './categoria-bebida/categoria-bebida.module#CategoriaBebidaPageModule' },
  { path: 'categoria-produto', loadChildren: './categoria-produto/categoria-produto.module#CategoriaProdutoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
