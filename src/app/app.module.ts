import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { NosotrosModule } from './pages/nosotros/nosotros.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    NosotrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
