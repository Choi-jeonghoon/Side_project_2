import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('/boards')
export class BoardsController {
    1번 방법
    boardsService: BoardsService; //타입스크립트에는 여기에 프포퍼티를 선언해줘야 사용이가능하다.

    constructor(boardsService: BoardsService) {
      //constructor의 빨간색의 boardsService 파라미터이고 아래의 this.~~~이 프로퍼티이다.
      this.boardsService = boardsService;
    }
    @Get()
    getAllTack():Board[] {
        return this.boardsService.getAllBoards();
    }

  //2번방법
  constructor(private boardsService: BoardsService) {}
  //private를 사용하는 이유는 class안에서만 사용하기위해서 사용한다.
  getAllTack() {
    this.boardsService.getAllBoards;
  }
}
