import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Controller, Post, Body } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LoginDto } from "./dto/login-auth.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiBody({ type: LoginDto })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.username, loginDto.password);
  }

  @Post("register")
  @ApiBody({ type: CreateUserDto })
  register(@Body() createuserDto: CreateUserDto) {
    return this.authService.register(createuserDto);
  }
}
