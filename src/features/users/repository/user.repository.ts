import { DataSource, Repository } from 'typeorm'
import { UserEntity } from '../model/user.entity'
import { Inject, Injectable } from '@nestjs/common'
import * as constants from 'src/config/constants'

@Injectable()
export class UserRepository extends Repository<UserEntity> {
	constructor(@Inject(constants.dataSource.POSTGRES) dataSource: DataSource) {
		super(UserEntity, dataSource.createEntityManager())
	}

	async findOneById(id: number): Promise<UserEntity | undefined> {
		return this.findOne({ where: { id } })
	}

	async findByUsername(username: string): Promise<UserEntity | undefined> {
		return this.findOne({ where: { username } })
	}

	async findByEmail(email: string): Promise<UserEntity | undefined> {
		return this.findOne({ where: { email } })
	}
}
