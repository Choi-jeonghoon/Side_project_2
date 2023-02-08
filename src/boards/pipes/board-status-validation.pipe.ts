import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { BoardStatus } from '../board.model';

// export class BoardStatusValidationPipe implements PipeTransform {
//   transform(value: any, metadata: ArgumentMetadata) {
//     console.log('value', value);
//     console.log('metadata', metadata);

//     return value;
//   }
// }

export class BoardStatusValidationPipe implements PipeTransform {
  private isStatisValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatisValid(value)) {
      throw new BadRequestException(`${value} is not in the status options`);
    }
    return value;
  }
}
