import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterEncriptWords1639987520163 implements MigrationInterface {
   

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('encripts',new TableColumn({
            name:"sacurity",
            type:"varchar",
            isNullable:false,
         })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('encripts','sacurity')
       
    }

}
