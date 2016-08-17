import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { HomePageComponent } from './home-page.component';
import { homePageRouting } from './home-page.routing';

@NgModule({
  imports: [
    SharedModule,
    homePageRouting
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule { }
