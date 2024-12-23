var express = require("express");
const authorController = require("../controllers/author.controller");
var router = express.Router();

router.post("/author/create", authorController.authorCreatePost);

router.get("/author/:id/delete", authorController.authorDeleteGet);

router.post("/author/:id/delete", authorController.authorDeletePost);

router.get("/author/:id/update", authorController.authorUpdateGet);

router.put("/author/:id/update", authorController.authorUpdatePost);

router.get("/author/:id", authorController.queryByAuthorId);

router.get("/", authorController.queryAllAuthors);

module.exports = router;
