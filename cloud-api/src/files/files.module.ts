import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { FilesController } from "./files.controller";
import { FileEntity } from "./entities/file.entity";
import { FilesService } from "./files.service";

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
