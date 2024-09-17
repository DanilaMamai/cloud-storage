import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1726587017792 implements MigrationInterface {
  name = "Auto1726587017792";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "files" ADD "userId" integer`);
    await queryRunner.query(
      `ALTER TABLE "files" ADD CONSTRAINT "FK_7e7425b17f9e707331e9a6c7335" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "files" DROP CONSTRAINT "FK_7e7425b17f9e707331e9a6c7335"`,
    );
    await queryRunner.query(`ALTER TABLE "files" DROP COLUMN "userId"`);
  }
}
