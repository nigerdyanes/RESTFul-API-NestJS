import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from './person.repository';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonRepository)
        private personRepository: PersonRepository,
    ){}

    async getPersons (): Promise<Person[]> {
        const persons = await this.personRepository.find();
        return persons;
    }

    async getPersonById (id:number): Promise<Person> {
        const personFound = await this.personRepository.findOne(id);
        return personFound;
    }

    async createPerson(body:any):Promise<any>{
        return this.personRepository.save(body);
    }

    async updatePerson(id:number,body:any):Promise<any>{
        return this.personRepository.update(id,body);
    }

    async deletePerson(id:number):Promise<any>{
        return this.personRepository.delete(id);
    }
}
