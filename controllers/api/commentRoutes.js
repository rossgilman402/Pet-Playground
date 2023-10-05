const router = require("express").Router();
const { Comment, Pet } = require("../../models");

//POST /api/comments/
router.post("/:id", async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      post_id: req.params.id,
      pet_id: req.session.petId,
    });

    const findPet = await Pet.findByPk(req.session.petId);

    res.status(200).json({ commentData, findPet });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
