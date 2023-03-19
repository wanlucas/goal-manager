import { CreateUserDTO } from '../../src/domain/useCases/user/CreateUser';

export const validBody: CreateUserDTO = {
  name: 'Wan Lucas',
  nickname: 'Wan',
  password: '123456',
};

export default [
  {
    name: 'Wan Lucas',
    nickname: 'Wan',
    password: '123456',
    id: 'fec0bd7f-11c0-f3da-975e-2a8af9ebae0b',
  },
  {
    name: 'Kurt Cobain',
    nickname: 'Kurt',
    password: '123456',
    id: '6ec0fd7f-11ef-43da-975e-2afad9ebae0b',
  },
  {
    name: 'Axl Rose',
    nickname: 'gunsandroses123',
    password: '123456',
    id: '2ecfbd7f-11f0-43da-975e-2a8ae9fbae0b',
  }
];