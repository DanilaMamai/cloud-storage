import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { FileEntity } from "../../files/entities/file.entity";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: Array<FileEntity>;

  @Column()
  username: string;

  @Column()
  password: string;
}
