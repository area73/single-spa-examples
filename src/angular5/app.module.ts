import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module.ts';

import {AppComponent} from './app.component.ts';
import {TabOneComponent} from './tab-one/tab-one.component.ts';
import {TabTwoComponent} from './tab-two/tab-two.component.ts';

import {APP_BASE_HREF} from '@angular/common';

import {enableProdMode} from '@angular/core';

try {
    enableProdMode();
} catch (err) {
    console.info('ProdMode already set');
}

@NgModule({
    declarations: [
        AppComponent,
        TabOneComponent,
        TabTwoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export default class mainModule {
}
