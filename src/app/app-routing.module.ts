import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FestivalListComponent } from './festival-list/festival-list.component';
import { FestivalComponent } from './festival/festival.component';
import { MapComponent } from './map/map.component';
import { PartenairesComponent } from './partenaires/partenaires.component';


const routes: Routes = [
  { path: 'festivals', component: FestivalListComponent },
  { path: 'map', component: MapComponent },
  { path: 'partenaires', component: PartenairesComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 