import Branch from '../entities/Branch';

interface BranchRepository {
  save(branch: Branch): Promise<string>,
}

export default BranchRepository;