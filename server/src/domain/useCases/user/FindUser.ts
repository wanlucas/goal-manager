import User from '../../entities/User';
import UserRepository from '../../repositories/UserRepository';
import { FindUserDTO } from '../../repositories/UserRepository';


export default class FindUser {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository) { 
    this.userRepository = userRepository;
  }

  async execute(values: FindUserDTO) {
    const result = await this.userRepository.findOne(values);

    if (!result) return null;

    return new User(result); 
  }
}