import 'zone.js';
import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular2 from 'single-spa-angular2';
import mainModule from './app.module.ts';
import {Router} from '@angular/router';


const ng2Lifecycles = singleSpaAngular2({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<example-ng5-app/>`,
  Router
});

export const bootstrap = [
  ng2Lifecycles.bootstrap,
];

export const mount = [
  ng2Lifecycles.mount,
];

export const unmount = [
  ng2Lifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById('angular5');
}
