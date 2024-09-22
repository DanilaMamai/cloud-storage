import { ApiTags } from "@nestjs/swagger";
import { Controller, Post, Body } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-auth.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }
}
