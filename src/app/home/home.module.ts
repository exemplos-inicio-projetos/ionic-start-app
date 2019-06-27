import { NgModule } from '@angular/core';

import { homePages } from './pages';
import { homeComponents } from './components';
import { homeDirectives } from './directives';
import { homePipes } from './pipes';
import { homeServices } from './services';
import { SharedModule } from 'shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

/**
 * Este módulo é apenas para servir como base para criação de outro
 */
@NgModule({
    declarations: [
        ... homeComponents,
        ... homeDirectives,
        ... homePages,
        ... homePipes,
    ],
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    entryComponents: [
        /**
         * Entry components não funcionam em módulos lazy loaded adicionar no entry components
         * do shared ou do core module
         * https://github.com/angular/angular/issues/14324#issuecomment-433389833
         */
    ],
    providers: [
        ... homeServices
    ]
})
export class HomeModule { }
