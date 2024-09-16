import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { EquipoComponent } from './equipo/equipo.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PropuestaCardComponent } from './propuesta-card/propuesta-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropuestasComponent,
    EquipoComponent,
    EventosComponent,
    ContactoComponent,
    BlogComponent,
    NavbarComponent,
    PropuestaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
