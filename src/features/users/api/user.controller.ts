import { Request, Response } from 'express'
import UserService from '../service/user.service'
import { Controller, Get, Req, Res } from '@nestjs/common'

@Controller('/users')
export class UserController {
	constructor(private userService: UserService) {}

	@Get('/')
	async getAllUsers(@Req() req: Request, @Res() res: Response): Promise<void> {
		try {
			const users = await this.userService.getAllUsers()
			res.status(200).json(users)
		} catch (error) {
			res.status(500).json({ message: 'Error fetching users', error })
		}
	}

	@Get('/:id')
	async getUserById(@Req() req: Request, @Res() res: Response): Promise<void> {
		try {
			const user = await this.userService.getUserById(+req.params.id)
			if (user) {
				res.status(200).json(user)
			} else {
				res.status(404).json({ message: 'User not found' })
			}
		} catch (error) {
			res.status(500).json({ message: 'Error fetching user', error })
		}
	}
}
