import { Component, Input, OnInit } from '@angular/core';
import { Moves } from 'src/app/models/moves';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() moves: []
  showMoves: never[]
  constructor() { }

  ngOnInit(): void {
    this.showMoves =this.moves.slice(0, 3)
  }

  
}
