import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit {
 public festivalDatas;
  constructor(private client: GraphqlService) { }

  ngOnInit(): void {
    this.client.getFestivals().subscribe((data) => {
      this.festivalDatas = data.festivalWis3;  
    });
  
  }

}
