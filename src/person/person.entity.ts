import { BaseEntity, Entity, PrimaryGeneratedColumn, Column   } from 'typeorm';

@Entity()
export class Person extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;
}