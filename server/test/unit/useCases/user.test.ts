import User from '../../../src/domain/entities/User';
import UserRepository from '../../../src/domain/repositories/UserRepository';
import CreateUser from '../../../src/domain/useCases/user/CreateUser';
import GetUser from '../../../src/domain/useCases/user/GetUser';
import GetUsers from '../../../src/domain/useCases/user/GetUsers';
import usersMock, { validBody } from '../../mocks/user';

describe('User use cases', () => {
  describe('CreateUser', () => {
    test('should create a User', async () => {
      const UserRepository = {
        save: (User: User) => Promise.resolve(User.id),
        findByNickname: () => Promise.resolve(undefined),
      } as unknown as UserRepository;

      const createUser = new CreateUser(UserRepository);
      const result = await createUser.execute(validBody);
  
      expect(result).toBeInstanceOf(User);
    });

    test('should fail if nickname already exists', async () => {
      const UserRepository = {
        save: (User: User) => Promise.resolve(User.id),
        findByNickname: () => Promise.resolve(usersMock[0]),
      } as unknown as UserRepository;

      const createUser = new CreateUser(UserRepository);
      const result = createUser.execute(validBody);

      expect(result).rejects.toThrow('Nickname already exists');
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