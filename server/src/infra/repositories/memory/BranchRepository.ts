import Branch from '../../../domain/entities/Branch';
import BranchRepository from '../../../domain/repositories/BranchRepository';

export default class BranchRepositoryInMemory implements BranchRepository {
  private branches: Branch[] = [];

  async save(branch: Branch): Promise<string> {
    this.branches.push(branch);
    return branch.id;
  }

  async findById(id: string): Promise<Branch | undefined> {
    return this.branches.find((branch) => branch.id === id);
  }

  async findAll(): Promise<Branch[]> {
    return this.branches;
  }
}