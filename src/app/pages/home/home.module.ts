import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.route';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '../../components/overlay/overlay.module';
import { ButtonsModule } from '../../components/buttons/buttons.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OverlayModule,
    ButtonsModule
  ],
  providers: []
})
export class HomeModule { }
