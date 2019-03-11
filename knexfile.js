// Update with your config settings.
const localPgConnection = {
  host: 'localhost',
  database: 'dev',
  user: 'meg',
  password: 'secret!',
};
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;


module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: prodDbConnection, // an object or a string
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

};
