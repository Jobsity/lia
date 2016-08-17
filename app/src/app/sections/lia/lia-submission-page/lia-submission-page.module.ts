import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LiaSubmissionPageComponent } from './lia-submission-page.component';
import { liaSubmissionPageRouting } from './lia-submission-page.routing';

@NgModule({
  imports: [
    SharedModule,
    liaSubmissionPageRouting
  ],
  declarations: [LiaSubmissionPageComponent],
  exports: [LiaSubmissionPageComponent]
})
export class LiaSubmissionPageModule { }
