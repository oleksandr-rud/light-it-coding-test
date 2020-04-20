import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1587138024059 implements MigrationInterface {
    name = 'Initial1587138024059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "owners" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "purchaseDate" TIMESTAMP NOT NULL, "carId" integer, CONSTRAINT "PK_42838282f2e6b216301a70b02d6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "manufacturers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "siret" integer NOT NULL, CONSTRAINT "PK_138520de32c379a48e703441975" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "firstRegistrationDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "owners" ADD CONSTRAINT "FK_8df327abd68acdd1de6bf0edd2b" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "owners" DROP CONSTRAINT "FK_8df327abd68acdd1de6bf0edd2b"`, undefined);
        await queryRunner.query(`DROP TABLE "cars"`, undefined);
        await queryRunner.query(`DROP TABLE "manufacturers"`, undefined);
        await queryRunner.query(`DROP TABLE "owners"`, undefined);
    }

}
