import Branch from '../../entities/Branch';
import BranchRepository from '../../repositories/BranchRepository';
import { v4 as uuid } from 'uuid';

export interface CreateBranchDTO {
  name: string;
  userId: string;
  xp?: number;
  icon?: number;
}

export default class CreateBranch {
  private branchRepository: BranchRepository;

  constructor(branchRepository: BranchRepository) {
    this.branchRepository = branchRepository;
  }

  async execute(data: CreateBranchDTO): Promise<Branch> {
    const id = uuid();
    const branch = new Branch({ ...data, id });

    await this.branchRepository.save(branch);

    return branch;
  }
}