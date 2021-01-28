import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public grid: Array<any> = [];

  private  gridSize = 9;

  constructor() { 
    for (let i = 0; i < this.gridSize; i++){
      this.grid.push(null);
    }
  }

  ngOnInit(): void {
  }

}
