import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ResponsivasModule } from './responsivas/responsivas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'axelivan',
    password: 'Dokka28@2023',
    database: 'glpi',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false
  }),
    // UsersModule,
    AuthModule,
    ResponsivasModule
    // ManningModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
