import User from '../../entities/User';
import UserRepository from '../../repositories/UserRepository';

export default class GetUsers {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository) { 
    this.userRepository = userRepository;
  }

  async execute() {
    const result = await this.userRepository.findAll();

    return result.map((data) => new User(data));
  }
}