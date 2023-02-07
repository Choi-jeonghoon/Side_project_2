import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  //모든 게시물에 대한
  getAllBoards(): Board[] {
    return this.boards;
  }

  //게시물 생성(공개가 되도록 퍼블릭)
  creatBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
