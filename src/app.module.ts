import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostModule } from './post/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: '4200',
      database: 'nest-server',
      username: 'root',
      password: '12345',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../**/*.migration{.ts,.js}']
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
