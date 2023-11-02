import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from '../../user/entity/user.entity'
@Table
export class WordCard extends Model {
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
    english: string;
    @Column({
        unique: false,
        allowNull: false
    })
    russian: string;
    @Column({
        unique: false,
        allowNull: false
    })
    @ForeignKey(() => User)
    userId: number;

    @BelongsTo(() => User)
    users: User
}