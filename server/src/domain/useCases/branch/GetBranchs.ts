import Branch from '../../entities/Branch';
import BranchRepository from '../../repositories/BranchRepository';

export default class GetBranchs {
  private branchRepository: BranchRepository;

  constructor(branchRepository: BranchRepository) {
    this.branchRepository = branchRepository;
  }

  async execute(): Promise<Branch[]> {
    return this.branchRepository.findAll();
  }
}