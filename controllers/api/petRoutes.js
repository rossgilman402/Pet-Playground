const router = require("express").Router();
const { Pet } = require("../../models");
const withAuth = require("../../utils/auth");

//Create Pet
router.post("/", withAuth, async (req, res) => {
  try {
    const petData = await Pet.create({
      bio: req.body.bio,
      age: req.body.age,
      gender: req.body.gender,
      birthday: req.body.birthday,
      favorite_food: req.body.favorite_food,
      pet_pic: req.body.pet_pic,
      pet_type: req.body.pet_type,
      favorite_toy: req.body.favorite_toy,
      user_id: req.body.user_id,
    });

    res.status(200).json(petData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get all pets
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

//Remove Pet
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

//Update Pet
router.post("/:id", withAuth, async (req, res) => {
  try {
    const pet = Pet.update(
      {
        bio: req.body.bio,
        favorite_food: req.body.favorite_food,
        pet_pic: req.body.pet_pic,
        favorite_toy: req.body.favorite_toy,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(pet);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
