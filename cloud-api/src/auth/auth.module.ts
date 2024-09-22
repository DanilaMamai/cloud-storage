import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JWT_CONSTANTS } from "./auth.constants";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
