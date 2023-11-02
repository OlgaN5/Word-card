import { HasMany, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { WordCard } from '../../word-card/entity/word-card.entity';

@Table
export class User extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    id: number;
    @Column({
        unique: false,
        allowNull: false
    })
    login: string;
    @Column({
        unique: false,
        allowNull: false
    })
    email: string;
    @HasMany(() => WordCard)
    wordCards: WordCard[]
    @Column({
        unique: false,
        allowNull: false
    })
    password: string
}