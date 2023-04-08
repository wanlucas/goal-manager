import User from '../../entities/User';
import { AlreadyExistsError } from '../../errors/RelationshipError';
import UserRepository, { CreateUserDTO } from '../../repositories/UserRepository';
import { v4 as uuid } from 'uuid';

export default class CreateUser {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(payload: CreateUserDTO): Promise<User> {
    const id = uuid();
    const user = new User({ ...payload, id });

    const foundNickName = await this.userRepository.findOne({ nickname: user.nickname });

    if (foundNickName) {
      throw new AlreadyExistsError('Nickname already exists');
    }

    await this.userRepository.save(user);

    return user;
  }
}