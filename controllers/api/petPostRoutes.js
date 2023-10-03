const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//api/pet-post/

//Create Post
router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      caption: req.body.caption,
      picture: req.body.picture,
      pet_id: req.body.pet_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get all Post
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

//Remove Post
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

//Update Post
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

//Get posts from pet
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
