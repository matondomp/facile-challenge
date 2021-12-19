import { 
     Entity,
     Column,
     PrimaryGeneratedColumn,
     CreateDateColumn, 
     UpdateDateColumn
 } from 'typeorm'


@Entity('encripts')
export class Encript{

    @PrimaryGeneratedColumn('increment')
    id!:number

    @Column()
    name!:string
    
    @CreateDateColumn()
    created_at?:Date

    @UpdateDateColumn()
    updated_at?:Date
    
}