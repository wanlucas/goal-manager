import User from '../../entities/User';
import UserRepository, { FindUserDTO } from '../../repositories/UserRepository';

export default class FindUsers {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository) { 
    this.userRepository = userRepository;
  }

  async execute(values: FindUserDTO) {
    const result = await this.userRepository.findAll(values);

    return result.map((data) => new User(data));
  }
}