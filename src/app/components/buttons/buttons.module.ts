import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';


@NgModule({
  declarations: [
      ButtonsComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
  ],
  providers: [],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
