import { Injectable, UnauthorizedException } from "@nestjs/common";

import { UsersService } from "../../src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
