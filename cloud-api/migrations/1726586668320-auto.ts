import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1726586668320 implements MigrationInterface {
  name = "Auto1726586668320";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "files" ("id" SERIAL NOT NULL, "fileName" character varying NOT NULL, "size" integer NOT NULL, "mimetype" character varying NOT NULL, "deletedAt" TIMESTAMP, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "firstName" character varying NOT NULL, "surName" character varying NOT NULL, "middleName" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "files"`);
  }
}
