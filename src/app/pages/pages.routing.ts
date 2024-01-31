import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {path: 'fundacion',
   component: PagesComponent,

   children:[
    {path: '', component: DashboardComponent, data: {titulo: 'fundacion'}},
    {path: 'nosotros', component: NosotrosComponent, data: {titulo: 'nosotros'}},
    {path: 'noticias', component: NoticiasComponent, data: {titulo: 'noticias'}},
    {path: 'contactos', component: ContactosComponent, data: {titulo: 'contactos'}},
    {path: 'que-hacemos', component: QueHacemosComponent, data: {titulo: 'que-hacemos'}}
   ]

   
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
