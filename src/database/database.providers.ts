import { ConfigService } from '@nestjs/config'
import * as constants from 'src/config/constants'
import { DataSource } from 'typeorm'

export const databaseProviders = [
	{
		provide: constants.dataSource.POSTGRES,
		useFactory: async (configService: ConfigService) => {
			console.log(configService.get<string>('DB_TYPE'))
			const dataSource = new DataSource({
				type: configService.get<string>('DB_TYPE') as 'postgres',
				host: configService.get<string>('DB_HOST'),
				port: configService.get<number>('DB_PORT'),
				username: configService.get<string>('DB_USERNAME'),
				password: configService.get<string>('DB_PASSWORD'),
				database: configService.get<string>('DB_DATABASE'),
				entities: [__dirname + '/../**/*.entity{.ts,.js}'],
				synchronize: false, // Set to false in production
			})

			return await dataSource.initialize()
		},
		inject: [ConfigService],
	},
]
