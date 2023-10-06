const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // age: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_food: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_pic: {
      type: DataTypes.STRING,
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_toy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pet",
  }
);

module.exports = Pet;
