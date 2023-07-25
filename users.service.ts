import { DataSource, Repository } from "typeorm";
import { UsersEntity } from "./users.entity";

export const repository = ()=> {
  const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    synchronize: true,
    logging: true,
    entities: [UsersEntity]
  });

  return AppDataSource.getRepository(UsersEntity);
};

export const getUser = async (name:string) => {
  const userRepository = repository();
  return await userRepository.findOne({where:{ name}})
};

export const createUser = async (name:string, age:number)=> {
  const userRepository = repository();
  const user = userRepository.create({ name, age });
  return await userRepository.save(user);
};



