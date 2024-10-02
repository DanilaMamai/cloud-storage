import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1727899170243 implements MigrationInterface {
  name = "Auto1727899170243";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "files" ("id" SERIAL NOT NULL, "deletedAt" TIMESTAMP, "fileName" character varying NOT NULL, "mimetype" character varying NOT NULL, "size" integer NOT NULL, "userId" integer, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "files" ADD CONSTRAINT "FK_7e7425b17f9e707331e9a6c7335" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "files" DROP CONSTRAINT "FK_7e7425b17f9e707331e9a6c7335"`,
    );
    await queryRunner.query(`DROP TABLE "files"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
