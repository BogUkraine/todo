import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	username: string

	@Column()
	password: string

	@Column()
	email: string

	@Column({ default: true })
	isActive: boolean
}
