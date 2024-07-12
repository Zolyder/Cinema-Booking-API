'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define('Seat', {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    auditoriumId: {
      type: DataTypes.INTEGER,
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

  Seat.associate = models => {
    Seat.belongsTo(models.Auditorium, { foreignKey: 'auditoriumId' });
    Seat.hasMany(models.Booking, { foreignKey: 'seatId' });
  };

  return Seat;
};
