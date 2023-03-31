import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    idCategory: number;
    @Column({type: 'varchar', length: 255})
    nameCategory: string;
}