import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class encripts1639907273164 implements MigrationInterface {
   

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
                name:"encripts",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isGenerated: true,
                        generationStrategy:'increment',
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isNullable:false,

                    }
                ]
          })
        )
     }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("encripts")
    }

}
