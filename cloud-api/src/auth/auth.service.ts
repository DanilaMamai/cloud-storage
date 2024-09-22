import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UsersService } from "../../src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, login: user.login };

    return await this.jwtService.signAsync(payload);
  }
}
