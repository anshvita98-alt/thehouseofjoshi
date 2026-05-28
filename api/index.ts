import { createServer } from 'http';
import { startInstance } from '../src/start';

export const config = {
  runtime: 'nodejs18.x',
  regions: ['all'],
};

export default startInstance.fetch;
