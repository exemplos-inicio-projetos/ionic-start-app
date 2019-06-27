import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { sharedServices } from './services';
import { sharedComponents } from './components';
import { sharedDirectives } from './directives';
import { sharedPipes } from './pipes';
import { sharedPages } from './pages';

/**
 * Variável utilizada para importar os módulos em um só lugar
 */
const defaultModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
];

@NgModule({
    declarations: [
        ...sharedComponents,
        ...sharedDirectives,
        ...sharedPipes,
        ...sharedPages
    ],
    imports: [
        ...defaultModules,
        IonicModule.forRoot(),
    ],
    exports: [
        ...defaultModules,
        ...sharedComponents,
        ...sharedDirectives,
        ...sharedPipes,
        ...sharedPages,
        IonicModule
    ],
    entryComponents: [
    ],
    providers: [
        ...sharedServices
    ]
})
export class SharedModule { }
