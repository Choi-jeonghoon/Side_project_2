//모델정의
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

//아래에 지정한것을 사용하지 않으면 erorr처리
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
