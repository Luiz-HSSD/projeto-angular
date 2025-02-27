import { ApplicationConfig, provideZoneChangeDetection,LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }, provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
