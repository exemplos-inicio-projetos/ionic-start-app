import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'guards/auth/auth.guard';
import { FeatureRootPage } from './feature-root.page';
import { FeaturePage } from './pages/feature/feature.page';

const featureRoutes: Routes = [
  { path: '', component: FeatureRootPage, canActivate: [AuthGuard], children: [
    { path: '', component: FeaturePage, canActivate: [AuthGuard] },
    // { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    // { path: ':id', component: RecipeDetailComponent },
    // { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ]},
  // Módulos aninhados devem ser colocados fora para funcionar!
  // { path: 'nested', loadChildren: './modules/feature-nested/feature-nested.module#FeatureNestedModule'},
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(featureRoutes)
  ],
  providers: [AuthGuard]
})
export class FeatureRoutingModule {

}
