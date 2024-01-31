import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { NosotrosComponent } from './nosotros.component';


@NgModule({
  declarations: [
    MisionComponent,
    VisionComponent,
    NosotrosComponent
  ],
  exports:[
    NosotrosComponent,
    
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
