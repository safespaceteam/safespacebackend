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
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
