import BranchRepository from '../../repositories/BranchRepository';

export default class GetBranch {
  private branchRepository: BranchRepository;
  
  constructor(branchRepository: BranchRepository) { 
    this.branchRepository = branchRepository;
  }

  execute(id: string) {
    return this.branchRepository.findById(id);
  }
}