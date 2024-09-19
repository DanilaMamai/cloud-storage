import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateFileDto } from "./dto/create-file.dto";
import { FileEntity } from "./entities/file.entity";

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private filesRepository: Repository<FileEntity>,
  ) {}

  create(createFileDto: CreateFileDto) {
    return this.filesRepository.insert(createFileDto);
  }
}
