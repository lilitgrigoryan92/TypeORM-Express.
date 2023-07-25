import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UsersEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}


