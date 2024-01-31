import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  {path: 'nosotros',
  component: NosotrosComponent,

  children:[
   {path: '', component: NosotrosComponent, data: {titulo: 'nosotros'}},
   {path: 'mision', component: MisionComponent, data: {titulo: 'mision'}},
   {path: 'vision', component: VisionComponent, data: {titulo: 'vision'}},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
