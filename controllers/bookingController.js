'use strict';

const models = require('../models');

const create = async (req, res) => {
  const { auditoriumId, seatId, showTime, email } = req.body;

  try {
    const auditorium = await models.Auditorium.findByPk(auditoriumId);
    if (!auditorium) {
      return res.status(404).json({ error: 'Auditorium not found' });
    }

    if (!auditorium.showTimes.includes(showTime)) {
      return res.status(400).json({ error: 'Invalid show time for the selected auditorium' });
    }

    const seat = await models.Seat.findByPk(seatId);
    if (!seat) {
      return res.status(404).json({ error: 'Seat not found' });
    }

    const existingBooking = await models.Booking.findOne({
      where: { seatId, showTime, deletedAt: null }
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'Seat already booked for this showtime' });
    }

    const booker = await models.Booker.findOne({ where: { email } });
    if (!booker) {
      return res.status(404).json({ error: 'Email not found. Please register first.' });
    }

    const booking = await models.Booking.create({
      bookerId: booker.id,
      auditoriumId,
      seatId,
      showTime
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConfirmation = async (req, res) => {
  try {
    const booking = await models.Booking.findByPk(req.params.id, {
      include: [
        { model: models.Booker, attributes: ['email'] },
        { model: models.Auditorium, attributes: ['name'] },
        { model: models.Seat, attributes: ['number'] }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.bookerId !== req.user.id) {
      return res.status(403).json({ error: 'You are not authorized to view this booking' });
    }

    res.status(200).json({
      email: booking.Booker.email,
      bookingCode: booking.id,
      auditorium: booking.Auditorium.name,
      showTime: booking.showTime,
      seat: booking.Seat.number
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getConfirmation,
};
