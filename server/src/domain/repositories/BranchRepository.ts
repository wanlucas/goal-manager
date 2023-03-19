import Branch from '../entities/Branch';

interface BranchRepository {
  save(branch: Branch): Promise<string>,
  findAll(): Promise<Branch[]>,
  findById(id: string): Promise<Branch | undefined>,
}

export default BranchRepository;