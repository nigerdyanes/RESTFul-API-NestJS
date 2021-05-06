import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PersonModule } from './person/person.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    PersonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
