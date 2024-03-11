import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  
  //registering app level routes with router service
  //provideRouter is a inbuilt "Service:"
  
  providers: [provideRouter(routes),
    provideHttpClient()
  // importProvidersFrom(HttpClient)
  ]
};
