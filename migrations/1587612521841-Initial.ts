import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1587612521841 implements MigrationInterface {
    name = 'Initial1587612521841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "owners" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "purchaseDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_42838282f2e6b216301a70b02d6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "manufacturers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "siret" integer NOT NULL, CONSTRAINT "PK_138520de32c379a48e703441975" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "firstRegistrationDate" TIMESTAMP NOT NULL, "manufacturerId" integer, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "cars_owners_owners" ("carsId" integer NOT NULL, "ownersId" integer NOT NULL, CONSTRAINT "PK_186fa7615f64350036c705f48a8" PRIMARY KEY ("carsId", "ownersId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d38e0f445b7a1dccf3ba4c32f3" ON "cars_owners_owners" ("carsId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_3ab14d4ed73c3d7d0692b97d60" ON "cars_owners_owners" ("ownersId") `, undefined);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_f6c27062077d25785bd1ac742b1" FOREIGN KEY ("manufacturerId") REFERENCES "manufacturers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "cars_owners_owners" ADD CONSTRAINT "FK_d38e0f445b7a1dccf3ba4c32f38" FOREIGN KEY ("carsId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "cars_owners_owners" ADD CONSTRAINT "FK_3ab14d4ed73c3d7d0692b97d607" FOREIGN KEY ("ownersId") REFERENCES "owners"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars_owners_owners" DROP CONSTRAINT "FK_3ab14d4ed73c3d7d0692b97d607"`, undefined);
        await queryRunner.query(`ALTER TABLE "cars_owners_owners" DROP CONSTRAINT "FK_d38e0f445b7a1dccf3ba4c32f38"`, undefined);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_f6c27062077d25785bd1ac742b1"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_3ab14d4ed73c3d7d0692b97d60"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d38e0f445b7a1dccf3ba4c32f3"`, undefined);
        await queryRunner.query(`DROP TABLE "cars_owners_owners"`, undefined);
        await queryRunner.query(`DROP TABLE "cars"`, undefined);
        await queryRunner.query(`DROP TABLE "manufacturers"`, undefined);
        await queryRunner.query(`DROP TABLE "owners"`, undefined);
    }

}
