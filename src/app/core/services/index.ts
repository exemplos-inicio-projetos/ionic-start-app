import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicRouteStrategy } from '@ionic/angular';

import { CustomHttpInterceptor } from 'src/app/interceptors/custom-http.interceptor';

// export function getConfigAsync(configService: ConfigService) {
//   return () => configService.getConfigAsync();
// }

/**
 * Variável utilizada para importar os services em um só lugar
 */
export const coreServices: any = [
    SplashScreen,
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
     // { provide: APP_INITIALIZER, useFactory: getConfigAsync, deps: [ConfigService], multi: true },
];
