import User from '../../entities/User';
import UserRepository from '../../repositories/UserRepository';

export default class GetUser {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository) { 
    this.userRepository = userRepository;
  }

  async execute(id: string) {
    const result = await this.userRepository.findById(id);

    if (!result) return null;

    return new User(result); 
  }
}