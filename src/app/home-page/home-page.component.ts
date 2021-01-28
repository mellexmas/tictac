import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public grid: Array<Cell> = [];

  private  gridSize = 9;

  constructor() { 
    for (let i = 0; i < this.gridSize; i++){
      this.grid.push({
        empty: true,
        cross: false,
        circle: false,
      });
    }
  }

  ngOnInit(): void {
  }

public clickOnCell(cell: Cell): void {
  cell.empty = false;
  cell.cross = true;
}

}
