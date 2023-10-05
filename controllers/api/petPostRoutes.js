const router = require("express").Router();
const { Post, Pet } = require("../../models");
const withAuth = require("../../utils/auth");
const upload = require("../../multerSetup");

//api/pet-post/

//Create Post
//POST //api/pet-post/
router.post("/", upload.single("image"), withAuth, async (req, res) => {
  try {
    console.log("FILEEEE", req.file);
    console.log("BODDYYY", req.body);
    const imagePath = "/images/uploads/" + req.file.filename;

    console.log("req.session.petId", req.session.petId);

    const postData = await Post.create({
      title: req.body.title,
      caption: req.body.caption,
      picture: imagePath,
      pet_id: req.session.petId,
    });
    // const petUserName = location.href.substring(
    //   location.href.lastIndexOf("/") + 1
    // );

    const pet = await Pet.findByPk(postData.pet_id);
    const petUserName = pet.username;

    console.log("USERNAMEEEE", petUserName);
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

//POST //api/pet-post/id
router.post("/:id", withAuth, async (req, res) => {
  try {
    const post = Post.update(
      {
        title: req.body.title,
        caption: req.body.caption,
      },
      {
        where: { id: req.params.id },
      }
    );
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
