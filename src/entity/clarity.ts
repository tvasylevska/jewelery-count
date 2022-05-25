import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import Price from './price';

enum ClarityType {
    LC = 'LC',
    FL = 'FL',
    IF = 'IF', // hi
    VVS1 = 'VVS1',
    VVS2 = 'VVS2', // almost
    VS1 = 'VS1',
    VS2 = 'VS2', // -
    SI1 = 'SI1',
    SI2 = 'SI2', // -
    P1 = 'P1',
    P2 = 'P2',
    P3 = 'P3'
}

@Entity('clarity')
export class Clarity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 6
    })
    clarity: string

    @OneToOne(() => Price)
    @JoinColumn()
    price: Price
}
