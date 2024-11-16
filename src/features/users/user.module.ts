import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './model/user.entity'
import { UserRepository } from './repository/user.repository'
import UserService from './service/user.service'
import { UserController } from './api/user.controller'

@Module({
	imports: [],
	exports: [UserService],
	providers: [UserService, UserRepository],
	controllers: [UserController],
})
export class UserModule {}
