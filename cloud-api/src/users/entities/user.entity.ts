import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { FileEntity } from "../../files/entities/file.entity";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  surName: string;

  @Column()
  middleName?: string;

  @OneToMany(() => FileEntity, (file) => file.user)
  files: Array<FileEntity>;
}
