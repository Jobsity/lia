import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { LiveInterviewAppComponent, environment } from './';
import { routing } from './live-interview.routes';
import { SharedModule } from './shared/shared.module';
import { HomePageModule } from './sections/home/home-page/home-page.module';
import { LiaModule } from './sections/lia/lia.module';

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
    LiaModule
  ],
  bootstrap: [LiveInterviewAppComponent],
})
export class AppModule {}
