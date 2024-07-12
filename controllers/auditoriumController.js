'use strict';

const models = require('../models');

const getAvailability = async (req, res) => {
  try {
    const auditoriums = await models.Auditorium.findAll({
      include: {
        model: models.Seat,
        where: { deletedAt: null },
        required: false,
        include: {
          model: models.Booking,
          where: { deletedAt: null },
          required: false,
        }
      }
    });

    const availability = auditoriums.map(auditorium => {
      const auditoriumAvailability = auditorium.showTimes.map(time => {
        const seats = auditorium.Seats.map(seat => {
          const isBooked = seat.Bookings.some(booking => booking.showTime === time);
          return {
            seatId: seat.id,
            booked: isBooked
          };
        });

        return {
          time: time,
          seats: seats
        };
      });

      return {
        auditoriumId: auditorium.id,
        name: auditorium.name,
        capacity: auditorium.capacity,
        availability: auditoriumAvailability,
      };
    });

    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAvailability,
};
