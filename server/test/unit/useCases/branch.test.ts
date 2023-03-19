import Branch from '../../../src/domain/entities/Branch';
import BranchRepository from '../../../src/domain/repositories/BranchRepository';
import CreateBranch, { CreateBranchDTO } from '../../../src/domain/useCases/branch/Createbranch';

describe('Branch use cases', () => {
  const branchRepository: BranchRepository = {
    save: (branch: Branch) => Promise.resolve(branch.id),
  };

  const data: CreateBranchDTO = {
    userId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae02',
    name: 'Guitar',
  };

  describe('CreateBranch', () => {
    test('should create a branch', async () => {
      const createBranch = new CreateBranch(branchRepository);
      const result = await createBranch.execute(data);
  
      expect(result).toBeInstanceOf(Branch);
    });
  });
});