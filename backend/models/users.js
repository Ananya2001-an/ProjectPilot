const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'nayak1',
  port: 5432,
});

//get all users
const getUsers = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM users", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

//create a new user record
const createUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, email, password } = body;
    pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new user has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

module.exports = {getUsers, createUser};
