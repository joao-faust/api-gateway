import { open } from 'lmdb';

const lmdb = open('./.db', {
  compression: true,
});

export default lmdb;
