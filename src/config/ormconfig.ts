import * as dotenv from 'dotenv'
dotenv.config({
	path: '.env',
})
import { DataSource } from 'typeorm'

export default new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	synchronize: false,
	dropSchema: false,
	logging: false,
	logger: 'file',
	entities: ['dist/features/**/**/*.entity{.ts,.js}'],
	migrations: ['dist/database/migrations/**/*{.ts,.js}'],
	// subscribers: ['src/subscriber/**/*.ts'],
	migrationsTableName: 'migrations',
})
