import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from 'shared/shared.module';
import { AuthModule } from 'guards/auth/auth.module';
import { coreComponents } from './components';
import { coreDirectives } from './directives';
import { corePages } from './pages';
import { corePipes } from './pipes';
import { coreServices } from './services';

@NgModule({
    declarations: [
        ...coreComponents,
        ...coreDirectives,
        ...corePages,
        ...corePipes
    ],
    entryComponents: [],
    exports: [
        ...coreComponents
    ],
    imports: [
        AppRoutingModule,
        AuthModule,
        BrowserModule,
        SharedModule
    ],
    providers: [
        ...coreServices
    ],
})
export class CoreModule { }
