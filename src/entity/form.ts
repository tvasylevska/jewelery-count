import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import Price from './price';

@Entity('forms')
export class Forms {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 12
    })
    form_type: string

    @OneToOne(() => Price)
    @JoinColumn()
    price: Price
}
