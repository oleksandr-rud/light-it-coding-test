const process = require('process');

module.exports = {
    'type': 'postgres',
    'host': process.env.POSTGRES_HOST,
    'port': process.env.POSTGRES_PORT,
    'username': process.env.POSTGRES_USER,
    'password': process.env.POSTGRES_PASSWORD,
    'database': process.env.POSTGRES_DB,
    'synchronize': false,
    'dropSchema': false,
    'logging': false,
    'entities': 'src/**/**.entity{.ts,.js}',
    'migrations': ['migrations/**/*.ts'],
    'cli': {
        'entitiesDir': 'src/**/entities',
        'migrationsDir': 'migrations',
    },
};
