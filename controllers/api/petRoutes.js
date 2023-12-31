const router = require("express").Router();
const { Pet } = require("../../models");
const withAuth = require("../../utils/auth");
const { uploadPets } = require("../../multerSetup");

//POST /api/pets/
router.post("/", uploadPets.single("pet_pic"), withAuth, async (req, res) => {
  try {
    console.log("req.file", req.file);
    console.log("req.body", req.body);
    const pet_picPath = "/images/pet_pics/" + req.file.filename;

    const petData = await Pet.create({
      bio: req.body.bio,
      name: req.body.name,
      username: req.body.username,
      gender: req.body.gender,
      birthday: req.body.birthday,
      favorite_food: req.body.favorite_food,
      pet_pic: pet_picPath,
      pet_type: req.body.pet_type,
      favorite_toy: req.body.favorite_toy,
      user_id: req.session.userId,
    });

    res.status(200).json(petData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET /api/pets/
router.get("/", withAuth, async (req, res) => {
  try {
    const petData = await Pet.findAll({});

    const pets = petData.map((pet) => pet.get({ plain: true }));

    res.status(200).json(pets);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

///DELETE /api/pets/id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const pet = Pet.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(pet);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//POST /api/pets/id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const pet = Pet.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(pet);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET /api/pets/
router.get("/:id", withAuth, async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: {
        user_id: req.params.id,
      },
    });

    const pets = petData.map((pet) => pet.get({ plain: true }));

    res.status(200).json(pets);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
