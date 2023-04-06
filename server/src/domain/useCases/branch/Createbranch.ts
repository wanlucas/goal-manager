import Branch from '../../entities/Branch';
import BranchRepository from '../../repositories/BranchRepository';
import { v4 as uuid } from 'uuid';
import UserRepository from '../../repositories/UserRepository';
import { NotFindingError } from '../../errors/RelationshipError';

export interface CreateBranchDTO {
  name: string;
  userId: string;
  xp?: number;
  icon?: number;
}

export default class CreateBranch {
  private branchRepository: BranchRepository;
  private userRepository: UserRepository;

  constructor(branchRepository: BranchRepository, userRepository: UserRepository) {
    this.branchRepository = branchRepository;
    this.userRepository = userRepository;
  }

  async execute(payload: CreateBranchDTO): Promise<Branch> {
    const id = uuid();
    const branch = new Branch({ ...payload, id });

    const foundUser = await this.userRepository.findById(branch.userId);

    if (!foundUser) {
      throw new NotFindingError('User not found');
    }

    await this.branchRepository.save(branch);

    return branch;
  }
}