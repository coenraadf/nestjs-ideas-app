import { IsNotEmpty } from 'class-validator';
import { IdeaRO } from '../idea/idea.dto';
import { IdeaEntity } from 'dist/idea/idea.entity';

export class UserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

// tslint:disable-next-line: max-classes-per-file
export class UserRO {
  id: string;
  username: string;
  created: Date;
  token?: string;
  ideas: IdeaRO;
  bookmarks?: IdeaEntity[];
}
