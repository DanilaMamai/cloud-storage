import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";

import { UserEntity } from "../../users/entities/user.entity";

export class LoginDto extends PartialType(UserEntity) {
  @ApiProperty({ default: "daniilmamaenko@gmail.com" })
  email?: string;

  @ApiProperty({ default: "admin" })
  password?: string;
}
