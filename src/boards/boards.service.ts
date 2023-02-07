import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [];

  //모든 게시물에 대한
  getAllBoards() {
    return this.boards;
  }
}
