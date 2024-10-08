import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";

import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends PartialType(UserEntity) {
  @ApiProperty({ default: "" })
  username: string;

  @ApiProperty({ default: "" })
  password: string;
}
