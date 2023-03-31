import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    idWallet: number;
    @Column({type: 'varchar', length: 255})
    nameWallet: string;
    @Column({type: "int"})
    user: number
    @Column({default :0})
    incomeMoney: number
    @Column({default :0})
    payMoney: number
}