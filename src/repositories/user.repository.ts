import { appDataSource } from "../data-source";
import { UserEntity } from "../entities/user.entity";

export const userRepository = appDataSource.getRepository(UserEntity);