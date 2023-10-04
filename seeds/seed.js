const sequelize = require("../config/connection");
const { User, Pet, Post } = require("../models");

const userData = require("./User.json");
const postData = require("./Post.json");
const petData = require("./Pet.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const userDataItem of userData) {
    await User.create(userDataItem);
  }
  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (const pet of petData) {
    await Pet.create({
      ...pet,
      user_id: 1,
    });
  }

  for (const post of postData) {
    await Post.create({
      ...post,
      pet_id: 1,
    });
  }

  process.exit(0);
};

seedDatabase();
