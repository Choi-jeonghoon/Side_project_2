import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { Boards } from './boards';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [Boards, BoardsService],
})
export class BoardsModule {}
