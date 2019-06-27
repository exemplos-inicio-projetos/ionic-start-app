import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'feature', loadChildren: './feature/feature.module#FeatureModule' },
];

@NgModule({
  imports: [
    /** preloadingStrategy: Carrega primeiro os módulos necessários para iniciar
     * o app e depois carrega os que podem ser acessados pelo usuário
     */
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
