import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { List } from 'src/app/shared/models/list.model';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {
  @Output() addBoardEvent: EventEmitter<List> = new EventEmitter<List>();
  boardModel: List = new List();

  constructor() { }

  ngOnInit() {
  }

  addBoard() {
    const newBoard = new List();
    newBoard.description = this.boardModel.description;
    newBoard.name = this.boardModel.name;
    newBoard.tasks = [];
    this.addBoardEvent.emit(newBoard);
    this.boardModel = new List();
  }

}
