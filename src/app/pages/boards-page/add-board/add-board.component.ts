import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Board } from 'src/app/shared/models/board.model';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {
  @Output() addBoardEvent: EventEmitter<Board> = new EventEmitter<Board>();
  boardModel: Board = new Board();

  constructor() { }

  ngOnInit() {
  }

  addBoard() {
    const newBoard = new Board();
    newBoard.description = this.boardModel.description;
    newBoard.name = this.boardModel.name;
    newBoard.tasks = [];
    this.addBoardEvent.emit(newBoard);
    this.boardModel = new Board();
  }

}
