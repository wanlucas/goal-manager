import { CreateGoalDTO } from '../../src/domain/useCases/goal/CreateGoal';
import { getDateInOneMonth } from '../helpers/time';

export const validBody: CreateGoalDTO = {
  description: 'Learn how to use Jest',
  branchId: '6ec0bd4f-f1c0-43da-975e-2a8ad9eb2853',
  finalDate: getDateInOneMonth(),
  difficulty: 2,
};

export default [
  {
    description: 'Learn how to use Jest',
    id: '6ec02d7f-11c0-43da-445e-2a8fd9ebae0b',
    branchId: '6ec0bd4f-f1c0-43da-975e-2a8ad9eb2853',
    finalDate: getDateInOneMonth(),
    difficulty: 2,
  },
  {
    description: 'Learn how to use MongoDB',
    id: '6ec0b37f-11c0-43da-925e-2a8ad9ebae0b',
    branchId: '6ec0b47f-11c0-43da-975e-2f8ad9ebae0b',
    finalDate: getDateInOneMonth(),
    difficulty: 3,
  },
  {
    description: 'Double Stroke Roll at 200 bpm', 
    id: '6ec0bd7f-1f20-43da-975e-454ad9eb2e0b',
    branchId: '6fc0bd7f-1140-43da-975e-2375d9ebae0b',
    finalDate: getDateInOneMonth(),
    difficulty: 9,
  }
];