import { Injectable } from '@nestjs/common'
import { UserEntity } from '../model/user.entity'
import { UserRepository } from '../repository/user.repository'

@Injectable()
class UserService {
	private users: UserEntity[] = []
	constructor(private userRepository: UserRepository) {}

	async createUser(name: string, email: string): Promise<UserEntity> {
		return this.userRepository.save({ name, email })
	}

	async getUserById(id: number): Promise<UserEntity | undefined> {
		return this.userRepository.findOneById(id)
	}

	async getAllUsers(): Promise<UserEntity[]> {
		return this.userRepository.find()
	}
}

export default UserService
