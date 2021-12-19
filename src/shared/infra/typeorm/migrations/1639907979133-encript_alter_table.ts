import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class encriptAlterTable1639907979133 implements MigrationInterface {
   
    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.addColumn('encripts',new TableColumn({
            name:"created_at",
            type:"timestamp",
            default:'now()',
         })
        )

         await queryRunner.addColumn('encripts',new TableColumn({
            name:"updated_at",
            type:"timestamp",
            default:'now()'
          })
         
         )

        
     }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("encripts","created_at")
        await queryRunner.dropColumn("encripts","updated_at")
    }


}
