import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimations(),
    providePrimeNG({
      ripple: true,
      inputStyle: 'outlined',
      theme: {
        preset: 'saga-blue',
        options: {
          darkModeSelector: '.dark-mode',
        }
      }
    })
  ]
};
