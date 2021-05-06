import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from './person.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([PersonRepository]),
  ],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
