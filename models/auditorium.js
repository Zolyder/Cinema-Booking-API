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
    },
    showTimes: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Almacena los horarios como una matriz de cadenas
      allowNull: false,
      defaultValue: ['3:00 PM', '5:00 PM', '7:00 PM'], // Horarios por defecto
    },
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
