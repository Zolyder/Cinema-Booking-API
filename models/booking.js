'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    bookerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    auditoriumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    showTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    }
  }, {
    timestamps: true,
    paranoid: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
  });

  Booking.associate = models => {
    Booking.belongsTo(models.Booker, { foreignKey: 'bookerId' });
    Booking.belongsTo(models.Auditorium, { foreignKey: 'auditoriumId' });
    Booking.belongsTo(models.Seat, { foreignKey: 'seatId' });
  };

  return Booking;
};
