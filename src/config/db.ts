import { open } from 'lmdb';

const db = open('./.db', {
  compression: true,
});

export default db;
