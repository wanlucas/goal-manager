import User from '../../../src/domain/entities/User';
import UserRepository from '../../../src/domain/repositories/UserRepository';
import CreateUser, { CreateUserDTO } from '../../../src/domain/useCases/user/CreateUser';

describe('User use cases', () => {
  describe('CreateUser', () => {
    const UserRepository = {
      save: (User: User) => Promise.resolve(User.id),
    } as unknown as UserRepository;
    
    test('should create a User', async () => {
      const payload: CreateUserDTO = {
        name: 'John Doe',
        nickname: 'johndoe',
        email: 'JohnDoe@gmail.com',
        password: '123456',
      };

      const createUser = new CreateUser(UserRepository);
      const result = await createUser.execute(payload);
  
      expect(result).toBeInstanceOf(User);
    });
  });
});