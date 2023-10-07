const router = require("express").Router();
const { Post, User, Pet, Comment } = require("../models");
const { Op } = require("sequelize");
const withAuth = require("../utils/auth");
const upload = require("../multerSetup");

//GET /
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Pet }, { model: Comment, include: [{ model: Pet }] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route for profile button to select random pet
router.get("/profile", withAuth, async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: {
        user_id: req.session.userId,
      },
    });

    const pets = petData.map((pet) => pet.get({ plain: true }));
    const currentPet = pets[0];
    res.redirect("profile/" + currentPet.username);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route for the pet profile pages
// GET /profile/name
router.get("/profile/:username", withAuth, async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: {
        user_id: req.session.userId,
      },
    });

    const pets = petData.map((pet) => pet.get({ plain: true }));
    const currentPet = pets.filter(
      (pet) => pet.username === req.params.username
    )[0];
    const postData = await Post.findAll({
      where: {
        pet_id: currentPet.id,
      },
    });
    console.log("BEFORE: PET", currentPet.id);
    req.session.save(() => {
      req.session.petId = currentPet.id;
    });
    console.log("AFTERR: PET", req.session.petId);
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("profile", {
      posts,
      pets,
      currentPet,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET /login
router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//GET /createPet
router.get("/createpet", withAuth, async (req, res) => {
  try {
    res.render("createpet", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
