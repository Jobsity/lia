import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LiaLandingPageComponent } from './lia-landing-page/lia-landing-page.component';
import { LiaSubmissionPageComponent } from './lia-submission-page/lia-submission-page.component';
import { liaRouting } from './lia.routing';

@NgModule({
  imports: [
    SharedModule,
    liaRouting
  ],
  declarations: [
    LiaLandingPageComponent,
    LiaSubmissionPageComponent
  ],
  exports: [
    LiaLandingPageComponent,
    LiaSubmissionPageComponent
  ]
})
export class LiaModule { }
