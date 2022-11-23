"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1668776834880 = void 0;
class default1668776834880 {
    constructor() {
        this.name = 'default1668776834880';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tasks"."note" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "saveNote" boolean NOT NULL, "id_user" integer, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks"."users" ("idUser" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_65e7c74bbeaca3cb19ae90bf6ee" PRIMARY KEY ("idUser"))`);
        await queryRunner.query(`ALTER TABLE "tasks"."note" ADD CONSTRAINT "FK_f4f182421a89338bdc432d6adf7" FOREIGN KEY ("id_user") REFERENCES "tasks"."users"("idUser") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tasks"."note" DROP CONSTRAINT "FK_f4f182421a89338bdc432d6adf7"`);
        await queryRunner.query(`DROP TABLE "tasks"."users"`);
        await queryRunner.query(`DROP TABLE "tasks"."note"`);
    }
}
exports.default1668776834880 = default1668776834880;
