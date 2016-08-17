import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { LiveInterviewAppComponent, environment } from './';
import { routing } from './live-interview.routes';
import { SharedModule } from './shared/shared.module';
import { HomePageModule } from './sections/home/home-page/home-page.module';
import { LiaLandingPageModule } from './sections/lia/lia-landing-page/lia-landing-page.module';
import { LiaSubmissionPageModule } from './sections/lia/lia-submission-page/lia-submission-page.module';

@NgModule({
  declarations: [
    LiveInterviewAppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing,
    SharedModule.forRoot(),
    HomePageModule,
    LiaLandingPageModule,
    LiaSubmissionPageModule
  ],
  bootstrap: [LiveInterviewAppComponent],
})
export class AppModule {}
