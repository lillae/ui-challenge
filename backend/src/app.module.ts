import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "sqlite",
			database: 'db.sqlite',
			synchronize: true,
			logging: false,
			entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
		}),
		ArticleModule,
		UserModule,
		ProfileModule,
		TagModule,
	],
	controllers: [
		AppController,
	],
	providers: [],
})
export class ApplicationModule {
	constructor(private readonly dataSource: DataSource) {
		this.fixedSync(this.dataSource);
	}

	async fixedSync(dataSource: DataSource) {
		await dataSource.query('PRAGMA foreign_keys=OFF');
		await dataSource.synchronize();
		await dataSource.query('PRAGMA foreign_keys=ON');
	}
}
