'use strict';
module.exports = (sequelize, DataTypes) => {
  const Auditorium = sequelize.define('Auditorium', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    }
  }, {
    tableName: 'Auditoriums',
    timestamps: true,
    paranoid: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
  });

  Auditorium.associate = models => {
    Auditorium.hasMany(models.Seat, { foreignKey: 'auditoriumId' });
    Auditorium.hasMany(models.Booking, { foreignKey: 'auditoriumId' });
  };

  return Auditorium;
};
