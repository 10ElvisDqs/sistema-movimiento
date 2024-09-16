import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { EquipoComponent } from './equipo/equipo.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'propuestas', component: PropuestasComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
