const Post = require("./Post");
const User = require("./User");
const Pet = require("./Pet");

User.hasMany(Pet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
});

Pet.hasMany(Post, {
  foreignKey: "pet_id",
  onDelete: "CASCADE",
});

Post.belongsTo(Pet, {
  foreignKey: "pet_id",
});

module.exports = { User, Pet, Post };
