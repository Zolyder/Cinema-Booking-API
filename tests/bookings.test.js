const request = require('supertest');
const app = require('../index');

describe('Bookings API', () => {
  let token;

  beforeEach(async () => {
    // Use an existing user from the seeders
    const res = await request(app)
      .post('/api/v1/bookers/login')
      .send({
        email: 'john.doe@example.com',
        password: 'password123'
      });

    token = res.body.token;
  });

  it('should create a new booking', async () => {
    const res = await request(app)
      .post('/api/v1/bookings')
      .set('Authorization', `Bearer ${token}`)
      .send({
        auditoriumId: 1,
        seatId: 3,
        showTime: '3:00 PM',
        email: 'john.doe@example.com'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toMatchObject({
      auditoriumId: 1,
      seatId: 3,
      showTime: '3:00 PM',
    });
  });

  it('should get booking confirmation', async () => {
    const bookingRes = await request(app)
      .post('/api/v1/bookings')
      .set('Authorization', `Bearer ${token}`)
      .send({
        auditoriumId: 1,
        seatId: 3,
        showTime: '3:00 PM',
        email: 'john.doe@example.com'
      });

    const bookingId = bookingRes.body.id;

    const res = await request(app)
      .get(`/api/v1/bookings/${bookingId}/confirmation`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      email: 'john.doe@example.com',
      bookingCode: bookingId,
      auditorium: 'Sala A',
      showTime: '3:00 PM',
      seat: 3
    });
  });

  it('should not allow accessing booking confirmation of another user', async () => {
    // Create another user and obtain their token
    await request(app)
      .post('/api/v1/bookers/register')
      .send({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'password123'
      });

    const resJane = await request(app)
      .post('/api/v1/bookers/login')
      .send({
        email: 'jane.doe@example.com',
        password: 'password123'
      });

    const tokenJane = resJane.body.token;

    // Attempt to access the booking confirmation of the first user
    const bookingRes = await request(app)
      .post('/api/v1/bookings')
      .set('Authorization', `Bearer ${token}`)
      .send({
        auditoriumId: 1,
        seatId: 3,
        showTime: '3:00 PM',
        email: 'john.doe@example.com'
      });

    const bookingId = bookingRes.body.id;

    const res = await request(app)
      .get(`/api/v1/bookings/${bookingId}/confirmation`)
      .set('Authorization', `Bearer ${tokenJane}`);

    expect(res.statusCode).toEqual(403);
    expect(res.body).toHaveProperty('error', 'You are not authorized to view this booking');
  });
});
