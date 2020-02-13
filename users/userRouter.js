const express = require("express");
const User = require("./userDb");
const router = express.Router();

const validateUser = require("../middlewares/validateUser");
const validateUserId = require("../middlewares/validateUserId");
const validatePost = require("../middlewares/validatePost");

router.post("/", validateUser, (req, res) =>
  // do your magic!
  User.insert({ name: req.body.name })
    .then(newId =>
      newId
        ? res.status(200).json(newId)
        : res.status(500).json({ errorMessage: "unknown error" })
    )
    .catch(rejected => res.status(400).json({ message: rejected }))
);

router.post("/:id/posts", validateUserId, (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
  User.get()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({ errorMessage: error }));
});

router.get("/:id", validateUserId, (req, res) => {
  // do your magic!
  req.user && res.status(200).json(req.user);
});

router.get("/:id/posts", validateUserId, (req, res) => {
  // posts belonging to user with :id
  // do your magic!
});

router.delete("/:id", validateUserId, (req, res) => {
  // do your magic!
});

router.put("/:id", validateUserId, (req, res) =>
  // do your magic!
  User.update(req.user.id, { ...req.userBody })
    .then(newId => {
      newId
        ? res.status(200).json(newId)
        : res.status(500).json({ errorMessage: "unknown error" });
    })
    .catch(rejected => res.status(400).json({ ...req.body }))
);

module.exports = router;
