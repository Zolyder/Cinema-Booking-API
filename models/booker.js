'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booker = sequelize.define('Booker', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
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

  Booker.associate = models => {
    Booker.hasMany(models.Booking, { foreignKey: 'bookerId' });
  };

  return Booker;
};
