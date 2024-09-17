import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1726589599434 implements MigrationInterface {
  name = "Auto1726589599434";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "surName"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "middleName"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "login" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "login"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "middleName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "surName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "firstName" character varying NOT NULL`,
    );
  }
}
