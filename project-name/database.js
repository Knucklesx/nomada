import mysql from 'mysql2';

const pool = mysql.createPool({
  connectionString: process.env.DATABASE_URL,
});

export function query(sql, params = []) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}