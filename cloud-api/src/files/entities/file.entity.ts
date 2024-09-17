import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("files")
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  size: number;

  @Column()
  mimetype: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
