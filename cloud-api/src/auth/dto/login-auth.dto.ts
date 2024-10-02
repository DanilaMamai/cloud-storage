import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";

import { UserEntity } from "../../users/entities/user.entity";

export class LoginDto extends PartialType(UserEntity) {
  @ApiProperty({ default: "admin" })
  username?: string;

  @ApiProperty({ default: "admin" })
  password?: string;
}
