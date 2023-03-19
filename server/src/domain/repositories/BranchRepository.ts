import Branch from '../entities/Branch';

interface BranchRepository {
  save(branch: Branch): Promise<string>,
  findAll(): Promise<Branch[]>,
}

export default BranchRepository;