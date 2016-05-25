import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { LiveInterviewAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { AuthService } from './app/sections/auth/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(LiveInterviewAppComponent, [HTTP_PROVIDERS, AuthService]);

