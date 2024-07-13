#!/bin/sh

# Print environment variables for debugging
echo "NODE_ENV=$NODE_ENV"
echo "DB_USERNAME=$DB_USERNAME"
echo "DB_PASSWORD=$DB_PASSWORD"
echo "DB_DATABASE=$DB_DATABASE"
echo "DB_HOST=$DB_HOST"
echo "DB_DIALECT=$DB_DIALECT"
echo "DB_PORT=$DB_PORT"

# Wait until the development database is ready
until nc -z -v -w30 $DB_HOST $DB_PORT
do
  echo "Waiting for development database connection at $DB_HOST:$DB_PORT..."
  sleep 1
done

# Only print message for test database connection
until nc -z -v -w30 cinema-test-db 5432
do
  echo "Test database connection attempt at cinema-test-db:5432..."
  sleep 1
done

# Run migrations and seeders for development
if [ "$NODE_ENV" = "development" ]; then
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
fi

# Skip test database migrations and seeders
# This section can be run separately when running tests

exec "$@"
