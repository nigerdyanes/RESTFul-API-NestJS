import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller('person')
export class PersonController {
    constructor(private personService:PersonService){}

    @Get()
    getPersons():Promise<Person[]>{
        return this.personService.getPersons();
    }

    @Get('/:id')
    getPersonById(
        @Param('id', ParseIntPipe) id:number
    ):Promise<Person>{
        return this.personService.getPersonById(id);
    }

    @Post()
    createPerson(
        @Body('firstName') firstName:string,
        @Body('lastName') lastName:string,
        @Body('email') email:string
    ):Promise<Person>{
        return this.personService.createPerson({
            firstName,
            lastName,
            email
        });
    }

    @Put('/:id')
    updatePerson(
        @Param('id', ParseIntPipe) id:number,
        @Body('firstName') firstName:string,
        @Body('lastName') lastName:string,
        @Body('email') email:string
    ):Promise<Person>{
        return this.personService.updatePerson(id,{
            firstName,
            lastName,
            email
        });
    }

    @Delete('/:id')
    deletePerson(
        @Param('id', ParseIntPipe) id:number
    ):Promise<Person>{
        return this.personService.deletePerson(id);
    }
}
