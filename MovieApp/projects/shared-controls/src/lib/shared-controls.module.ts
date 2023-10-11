import { NgModule } from '@angular/core';
import { SharedControlsComponent } from './shared-controls.component';
import { LedComponent } from './led.component';



@NgModule({
  declarations: [
    SharedControlsComponent,
    LedComponent
  ],
  imports: [
  ],
  exports: [
    SharedControlsComponent,
    LedComponent
  ]
})
export class SharedControlsModule { }
