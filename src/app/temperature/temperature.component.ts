import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  temperature: number = 0;
  constructor() { }

  ngOnInit(): void {//récup température
    const getTemperature = city => Math.round(100 / city.length);


    const city$ = from(['Montpellier']);

    const temperature$ = city$
      .pipe(map(city => getTemperature(city)));

    temperature$.subscribe(
      data => this.temperature = data
 
    );   
  }
 
}
