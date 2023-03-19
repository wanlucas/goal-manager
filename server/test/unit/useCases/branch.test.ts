import Branch from '../../../src/domain/entities/Branch';
import BranchRepository from '../../../src/domain/repositories/BranchRepository';
import UserRepository from '../../../src/domain/repositories/UserRepository';
import CreateBranch from '../../../src/domain/useCases/branch/Createbranch';
import GetBranch from '../../../src/domain/useCases/branch/GetBranch';
import GetBranchs from '../../../src/domain/useCases/branch/GetBranchs';
import branchsMock, { validBody } from '../../mocks/branch';
import usersMock from '../../mocks/user';

describe('Branch use cases', () => {
  describe('CreateBranch', () => {
    test('should create a branch', async () => {
      const branchRepository = {
        save: (branch: Branch) => Promise.resolve(branch.id),
      } as unknown as BranchRepository;

      const userRepository = {
        findById: () => Promise.resolve(usersMock[0]),
      } as unknown as UserRepository;

      const createBranch = new CreateBranch(branchRepository, userRepository);
      const result = await createBranch.execute(validBody);
  
      expect(result).toBeInstanceOf(Branch);
    });

    test('should fail if user not found', async () => {
      const branchRepository = {
        save: (branch: Branch) => Promise.resolve(branch.id),
      } as unknown as BranchRepository;

      const userRepository = {
        findById: () => Promise.resolve(undefined),
      } as unknown as UserRepository;

      const createBranch = new CreateBranch(branchRepository, userRepository);
      const result = createBranch.execute(validBody);

      expect(result).rejects.toThrow('User not found');
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