jest.setTimeout(30000); // Increase timeout for tests if needed

const { sequelize } = require('../models');
const { execSync } = require('child_process');
const dotenv = require('dotenv');

// Load environment variables from .env.test
dotenv.config({ path: '.env.test' });

// Set the environment to 'test' before all tests
beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  // Run migrations
  execSync('npx sequelize-cli db:migrate', { stdio: 'inherit' });
});

beforeEach(async () => {
  // Drop all tables and recreate them
  await sequelize.drop();
  await sequelize.sync({ force: true });

  // Run seeders
  execSync('npx sequelize-cli db:seed:all', { stdio: 'inherit' });
});

afterAll(async () => {
  await sequelize.close(); // Close the test database connection
});
