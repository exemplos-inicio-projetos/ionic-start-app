import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { authServices } from './services';
import { authComponents } from './components';
import { authPages } from './pages';
import { authPipes } from './pipes';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    ...authComponents,
    ...authPages,
    ...authPipes
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
    ...authServices
  ]
})
export class AuthModule {}
