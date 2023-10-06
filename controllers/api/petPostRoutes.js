const router = require("express").Router();
const { Post, Pet } = require("../../models");
const withAuth = require("../../utils/auth");
const upload = require("../../multerSetup");

//api/pet-post/

//Create Post
//POST //api/pet-post/
router.post("/", upload.single("image"), withAuth, async (req, res) => {
  try {
    const imagePath = "/images/uploads/" + req.file.filename;

    const postData = await Post.create({
      title: req.body.title,
      caption: req.body.caption,
      picture: imagePath,
      pet_id: req.session.petId,
    });

    const pet = await Pet.findByPk(postData.pet_id);
    const petUserName = pet.username;

    res.status(200).redirect(`/profile/${petUserName}`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET //api/pet-post/
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({});

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//DELETE //api/pet-post/id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const post = Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//PUT //api/pet-post/id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const post = Post.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET /api/pet-post/id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        pet_id: req.params.id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
