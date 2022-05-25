import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import Price from './price';
// weight
@Entity('carat_weight')
export class CaratWeight{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        default: 0,
        type: 'numeric',
        unique: true
    })
    weight: number

    @OneToOne(() => Price)
    @JoinColumn()
    price: Price
}
