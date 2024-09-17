import { config } from "dotenv";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { FilesModule } from "./files/files.module";
import { FileEntity } from "./files/entities/file.entity";
import { UserEntity } from "./users/entities/user.entity";
import { UsersModule } from "./users/users.module";

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      database: process.env.TYPEORM_DATABASE,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      entities: [FileEntity, UserEntity],
      synchronize: false,
    }),
    UsersModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
