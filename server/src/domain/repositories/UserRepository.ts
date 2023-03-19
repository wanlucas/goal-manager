import User from '../entities/User';

interface UserRepository {
  save(user: User): Promise<string>,
}

export default UserRepository;