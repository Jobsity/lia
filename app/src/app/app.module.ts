import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { LiveInterviewAppComponent, environment } from './';
import { routing } from './live-interview.routes';
import { HomePageComponent } from './sections/home/home-page';
import { LiaLandingPageComponent } from './sections/lia/lia-landing-page';
import { LiaSubmissionPageComponent } from './sections/lia/lia-submission-page';

@NgModule({
  declarations: [
    LiveInterviewAppComponent,
    HomePageComponent,
    LiaLandingPageComponent,
    LiaSubmissionPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing
  ],
  bootstrap: [LiveInterviewAppComponent],
})
export class AppModule {}
