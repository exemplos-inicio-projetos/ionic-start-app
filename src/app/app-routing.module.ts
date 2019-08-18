import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
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
