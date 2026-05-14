import { STATUS } from '../constants/api';

export const getStatusVariant = (status) => {
  switch (status) {
    case STATUS.ALIVE:
      return 'alive';
    case STATUS.DEAD:
      return 'dead';
    default:
      return 'unknown';
  }
};
