import User from '../entities/User';

interface UserRepository {
  save(user: User): Promise<string>,
  findAll(): Promise<User[]>,
  findById(id: string): Promise<User | undefined>,
  findByNickname(nickname: string): Promise<User | undefined>,
}

export default UserRepository;