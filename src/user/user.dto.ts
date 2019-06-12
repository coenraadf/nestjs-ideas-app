import { IsNotEmpty } from 'class-validator';
import { IdeaRO } from '../idea/idea.dto';

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
}
