const request = require('supertest');
const app = require('../index'); // Asegúrate de que esta es la ruta correcta a tu aplicación Express

describe('Auditoriums API', () => {
  let token;

  beforeAll(async () => {
    // Iniciar sesión para obtener el token
    const res = await request(app)
      .post('/api/v1/bookers/login')
      .send({
        email: 'john.doe@example.com',
        password: 'password123'
      });

    token = res.body.token;
  });

  it('should get availability of auditoriums', async () => {
    const res = await request(app)
      .get('/api/v1/auditoriums/availability')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    res.body.forEach(auditorium => {
      expect(auditorium).toMatchObject({
        auditoriumId: expect.any(Number),
        name: expect.any(String),
        capacity: expect.any(Number),
        availability: expect.any(Array),
      });

      auditorium.availability.forEach(timeSlot => {
        expect(timeSlot).toMatchObject({
          time: expect.any(String),
          seats: expect.any(Array),
        });

        timeSlot.seats.forEach(seat => {
          expect(seat).toMatchObject({
            seatId: expect.any(Number),
            booked: expect.any(Boolean),
          });
        });
      });
    });
  });

});
