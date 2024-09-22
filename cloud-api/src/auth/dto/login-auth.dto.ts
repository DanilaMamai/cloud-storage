import { PartialType } from "@nestjs/mapped-types";

import { UserEntity } from "../../users/entities/user.entity";

export class LoginDto extends PartialType(UserEntity) {
  email?: string;
  password?: string;
}
