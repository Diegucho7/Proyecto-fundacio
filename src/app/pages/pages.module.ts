import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PagesComponent } from './pages.component';
import {  RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    QueHacemosComponent,
    NoticiasComponent,
    ContactosComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    PagesComponent
    
  ],
  imports: [
    CommonModule,
    
    RouterOutlet,
    SharedModule,
    FormsModule,
    
  ]
})
export class PagesModule { }
