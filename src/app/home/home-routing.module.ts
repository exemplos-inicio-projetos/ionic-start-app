import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'guards/auth/auth.guard';
import { HomePage } from './pages/home/home.page';
import { HomeRootPage } from './home-root.page';

const homeRoutes: Routes = [
  { path: '', component: HomeRootPage, canActivate: [AuthGuard], children: [
    { path: '', component: HomePage, canActivate: [AuthGuard] },
    // { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    // { path: ':id', component: RecipeDetailComponent },
    // { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ]},
  // Módulos aninhados devem ser colocados fora para funcionar!
  // { path: 'nested', loadChildren: './modules/feature-nested/feature-nested.module#FeatureNestedModule'},
]

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class HomeRoutingModule {

}
