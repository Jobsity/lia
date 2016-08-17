import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LiaLandingPageComponent } from './lia-landing-page.component';
import { liaLandingPageRouting } from './lia-landing-page.routing';

@NgModule({
  imports: [
    SharedModule,
    liaLandingPageRouting
  ],
  declarations: [LiaLandingPageComponent],
  exports: [LiaLandingPageComponent]
})
export class LiaLandingPageModule { }
