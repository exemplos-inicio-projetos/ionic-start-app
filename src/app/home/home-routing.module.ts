import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'guards/auth/auth.guard';
import { HomePage } from './pages/home/home.page';
import { HomeRootPage } from './home-root.page';

const defaultRoutes: Routes = [
  {
    path: '',
    component: HomeRootPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomePage,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(defaultRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class HomeRoutingModule {

}
