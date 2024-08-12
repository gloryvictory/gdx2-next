import {Pool} from 'pg';

const pool = new Pool({
  user: 'gdx2map',
  host: 'localhost',
  database: 'gdx2map',
  password: 'gdx2mappwd',
  port: 5432,

})
export default pool;
