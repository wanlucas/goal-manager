import UserRepository from '../../repositories/UserRepository';

export default class GetUser {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository) { 
    this.userRepository = userRepository;
  }

  execute(id: string) {
    return this.userRepository.findById(id);
  }
}