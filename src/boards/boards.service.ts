import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  //모든 게시물에 대한
  getAllBoards(): Board[] {
    return this.boards;
  }

  //게시물 생성(공개가 되도록 퍼블릭)
  creatBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
  //특정 Id의 게시글 찾기
  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id == id);
  }

  //특정 ID의 게시글 삭제
  deletBoardById(id: string): void {
    this.boards = this.boards.filter((Board) => Board.id !== id);
    //코드해석 : filter Bodard의 id값이 다른값은 유지하고 같은것은 지운다
  }

  //특정 ID의 게시글 업데이트
  updateBoardById(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
    //return 값을 반환해주지않으면 에러
  }
}
