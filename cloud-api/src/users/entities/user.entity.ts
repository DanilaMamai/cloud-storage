import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { FileEntity } from "../../files/entities/file.entity";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: Array<FileEntity>;

  @Column()
  login: string;
}
