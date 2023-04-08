import User from '../entities/User';

export interface FindUserDTO {
  name?: string;
  nickname?: string;
  email?: string;
}

export interface CreateUserDTO {
  name: string;
  nickname: string;
  password: string;
}

export interface LoginDTO {
  nickname: string;
  password: string;
}

interface UserRepository {
  save(user: User): Promise<void>,
  findOne(values: FindUserDTO): Promise<User | undefined>,
  findAll(values: FindUserDTO): Promise<User[]>,
  findById(id: string): Promise<User | undefined>,
}

export default UserRepository;