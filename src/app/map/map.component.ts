import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private client: GraphqlService) { }
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 30,
    minZoom: 8,
    
  };
  markers = [];
  infoContent = '';


  ngOnInit(): void {
    console.log('initmap')
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  
  zoomIn() {
    if (this.zoom < this.options.maxZoom) { this.zoom++; }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) { this.zoom--; }
  }

  click(event: google.maps.MouseEvent) {
    
  }


  addMarker() {
    this.markers.push({
      position: {
        lat: 43.64127344529685,
        lng: 3.8508772772353552,
      },
      label: {
        color: 'red',
        fontWeight: 'bold',
        text: 'Metal ' ,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  addMarker1() {
    this.markers.push({
      position: {
        lat: 43.64090482548757,
        lng: 3.8576003555518694,
      },
      label: {
        color: 'white',
        fontWeight: 'bold',
        text: 'Reggae' ,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }
  addMarker2() {
    this.markers.push({
      position: {
        lat: 43.642654303082,
        lng: 3.8659437180138703,
      },
      label: {
        color: 'yellow',
        fontWeight: 'bold',
        text: 'Rap' ,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  addMarker3() {
    this.markers.push({
      position: {
        lat: 43.63580544772287,
        lng: 3.852205177705417,
      },
      label: {
        color: 'purple',
        fontWeight: 'bold',
        text: 'Electro' ,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
