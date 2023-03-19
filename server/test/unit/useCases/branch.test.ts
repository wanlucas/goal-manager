import Branch from '../../../src/domain/entities/Branch';
import BranchRepository from '../../../src/domain/repositories/BranchRepository';
import CreateBranch, { CreateBranchDTO } from '../../../src/domain/useCases/branch/Createbranch';
import GetBranch from '../../../src/domain/useCases/branch/GetBranch';
import GetBranchs from '../../../src/domain/useCases/branch/GetBranchs';
import branchsMock from '../../mocks/branch';

describe('Branch use cases', () => {
  describe('CreateBranch', () => {
    const branchRepository = {
      save: (branch: Branch) => Promise.resolve(branch.id),
    } as unknown as BranchRepository;
    
    test('should create a branch', async () => {
      const payload: CreateBranchDTO = {
        userId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae02',
        name: 'Guitar',
      };

      const createBranch = new CreateBranch(branchRepository);
      const result = await createBranch.execute(payload);
  
      expect(result).toBeInstanceOf(Branch);
    });
  });

  describe('GetBranchs', () => {
    const branchRepository: BranchRepository = {
      findAll: () => Promise.resolve(branchsMock),
    } as unknown as BranchRepository;

    test('should return a list of branchs', async () => {
      const getBranchs = new GetBranchs(branchRepository);
      const result = await getBranchs.execute();
  
      expect(result).toEqual(branchsMock);
    });
  });

  describe('GetBranch', () => {
    const branchRepository: BranchRepository = {
      findById: () => Promise.resolve(branchsMock[0]),
    } as unknown as BranchRepository;

    test('should find a branch', async () => {
      const getBranch = new GetBranch(branchRepository);
      const result = await getBranch.execute(branchsMock[0].id);
  
      expect(result).toEqual(branchsMock[0]);
    });
  });
});