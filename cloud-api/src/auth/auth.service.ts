import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { CreateUserDto } from "../../src/users/dto/create-user.dto";
import { UsersService } from "../../src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.usersService.findOneByUsername(username);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, username: user.username };

    return await this.jwtService.signAsync(payload);
  }

  async register(createuserDto: CreateUserDto) {
    return await this.usersService.create(createuserDto);
  }
}
