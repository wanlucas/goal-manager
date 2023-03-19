import User from '../../../src/domain/entities/User';
import UserRepository from '../../../src/domain/repositories/UserRepository';
import CreateUser, { CreateUserDTO } from '../../../src/domain/useCases/user/CreateUser';
import GetUser from '../../../src/domain/useCases/user/GetUser';
import GetUsers from '../../../src/domain/useCases/user/GetUsers';
import usersMock from '../../mocks/user';

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

  describe('GetUsers', () => {
    const UserRepository: UserRepository = {
      findAll: () => Promise.resolve(usersMock),
    } as unknown as UserRepository;

    test('should return a list of Users', async () => {
      const getUsers = new GetUsers(UserRepository);
      const result = await getUsers.execute();
  
      expect(result).toEqual(usersMock);
    });
  });

  describe('GetUser', () => {
    const UserRepository: UserRepository = {
      findById: () => Promise.resolve(usersMock[0]),
    } as unknown as UserRepository;

    test('should find a User', async () => {
      const getUser = new GetUser(UserRepository);
      const result = await getUser.execute(usersMock[0].id);
  
      expect(result).toEqual(usersMock[0]);
    });
  });
});