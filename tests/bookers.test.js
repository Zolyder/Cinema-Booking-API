const request = require('supertest');
const app = require('../index');

describe('Bookers API', () => {

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/v1/bookers/register')
      .send({
        name: 'Alice',
        email: 'alice@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should not register an existing user', async () => {
    await request(app)
      .post('/api/v1/bookers/register')
      .send({
        name: 'Bob',
        email: 'bob@example.com',
        password: 'password123'
      });

    const res = await request(app)
      .post('/api/v1/bookers/register')
      .send({
        name: 'Bob',
        email: 'bob@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'User already exists');
  });

  it('should login an existing user', async () => {
    await request(app)
      .post('/api/v1/bookers/register')
      .send({
        name: 'Charlie',
        email: 'charlie@example.com',
        password: 'password123'
      });

    const res = await request(app)
      .post('/api/v1/bookers/login')
      .send({
        email: 'charlie@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not login with incorrect email', async () => {
    const res = await request(app)
      .post('/api/v1/bookers/login')
      .send({
        email: 'nonexistent@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid email or password');
  });

  it('should not login with incorrect password', async () => {
    await request(app)
      .post('/api/v1/bookers/register')
      .send({
        name: 'Dave',
        email: 'dave@example.com',
        password: 'password123'
      });

    const res = await request(app)
      .post('/api/v1/bookers/login')
      .send({
        email: 'dave@example.com',
        password: 'wrongpassword'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid email or password');
  });
});
