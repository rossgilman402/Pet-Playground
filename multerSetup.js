const multer = require("multer");

const storagePosts = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const storagePets = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/pet_pics/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadPosts = multer({ storage: storagePosts });
const uploadPets = multer({ storage: storagePets });

module.exports = { uploadPosts, uploadPets };
