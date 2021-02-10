import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TemperatureComponent } from './temperature/temperature.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import { MapComponent } from './map/map.component';
import { FestivalComponent } from './festival/festival.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FestivalListComponent } from './festival-list/festival-list.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ContactComponent } from './contact/contact.component';
import { PushComponent } from './push/push.component';



@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    MapComponent,
    FestivalComponent,
    NavbarComponent,
    FestivalListComponent,
    PartenairesComponent,
    ContactComponent,
    PushComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 