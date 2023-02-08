import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('/boards')
export class BoardsController {
  //     1번 방법
  //     boardsService: BoardsService; //타입스크립트에는 여기에 프포퍼티를 선언해줘야 사용이가능하다.
  //     constructor(boardsService: BoardsService) {
  //       //constructor의 빨간색의 boardsService 파라미터이고 아래의 this.~~~이 프로퍼티이다.
  //       this.boardsService = boardsService;
  //     }
  //     @Get()
  //     getAllTack():Board[] {
  //         return this.boardsService.getAllBoards();
  //     }
  //   //2번방법
  //   constructor(private boardsService: BoardsService) {}
  //   //private를 사용하는 이유는 class안에서만 사용하기위해서 사용한다.
  //   getAllTack() {
  //     this.boardsService.getAllBoards;
  //   }
  constructor(private boardsService: BoardsService) {}

  //모든 게시물에 대한 핸들러
  @Get('/all')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }
  // 게시물 생성 핸들러
  @Post('/create')
  //@Body("title")title @Body("0000")0000이런식으로 가져오면 하나씩 가져온다
  //@Body("Body")Body
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    //게시물 하나만 보내기때문에 [] 를 빼서 타입을 지정한다.
    return this.boardsService.creatBoard(createBoardDto);
  }

  //특정 id로 게시글 찾는 핸들러
  @Get('/:id')
  getBodarById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }

  //특정 id로 게시글 삭제 핸들러
  @Delete('/:id')
  deletBodarById(@Param('id') id: string): void {
    this.boardsService.deletBoardById(id);
  }

  //특정 ID의 게시글 업데이트 핸들러
  @Patch('/status/:id')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.boardsService.updateBoardById(id, status);
  }
}
