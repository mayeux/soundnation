import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent implements OnInit {

  @Input()
  festival;

  constructor() { }

  ngOnInit(): void {
  }

}
