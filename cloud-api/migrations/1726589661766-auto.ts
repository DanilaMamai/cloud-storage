import { MigrationInterface, QueryRunner } from "typeorm";

import { UserEntity } from "../src/users/entities/user.entity";

export class Auto1726589661766 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const productRepo = queryRunner.connection.getRepository(UserEntity);

    await productRepo.insert({
      email: "daniilmamaenko@gmail.com",
      login: "admin",
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
