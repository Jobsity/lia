import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LIA_CARD_DIRECTIVES } from '../components/lia-card';
import { LIA_BUTTON_DIRECTIVES } from '../components/lia-button';
import { LiaInfoBlockComponent } from '../components/lia-info-block';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    LIA_BUTTON_DIRECTIVES,
    LIA_CARD_DIRECTIVES,
    LiaInfoBlockComponent
  ],
  exports: [
    LIA_BUTTON_DIRECTIVES,
    LIA_CARD_DIRECTIVES,
    LiaInfoBlockComponent,
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ]
    };
  }
}
