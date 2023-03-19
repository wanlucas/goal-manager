import UserRepository from '../../repositories/UserRepository';

export default class GetUsers {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository) { 
    this.userRepository = userRepository;
  }

  execute() {
    return this.userRepository.findAll();
  }
}