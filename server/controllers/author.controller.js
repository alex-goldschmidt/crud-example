const Author = require("../models/author.model");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.queryAllAuthors = asyncHandler(async (req, res, next) => {
  const authorsList = await Author.queryAllAuthors();

  const response = res.json({
    authorsList: authorsList,
  });

  return response;
});

exports.queryByAuthorId = asyncHandler(async (req, res, next) => {
  const authorId = req.params.id;
  const [author] = await Author.queryByAuthorId(authorId);
  if (author === null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  const response = res.json({
    author: author,
  });

  return response;
});

exports.authorCreatePost = [
  asyncHandler(async (req, res, next) => {
    const author = new Author({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const data = await Author.create(author);

    if (!data) {
      const err = new Error("Author not found");
      err.status = 404;
      return next(err);
    }
    const jsonResponse = res.json({
      newAuthor: data,
    });

    return jsonResponse;
  }),
];

exports.authorDeleteGet = asyncHandler(async (req, res, next) => {
  const authorId = req.params.id;

  const [author] = await Author.queryByAuthorId(authorId);

  if (author === null) {
    res.redirect("/catalog/authors");
  }

  const response = res.json({
    author: author,
  });

  res.redirect(`/catalog/author/${author.id}/delete`);
  return response;
});

exports.authorDeletePost = asyncHandler(async (req, res, next) => {
  const authorId = req.params.id;

  const [author] = await Author.queryByAuthorId(authorId);

  if (!author) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  const data = await Author.deleteByAuthorId(author.authorId);

  const jsonResponse = res.json({
    deletedAuthor: data,
  });

  return jsonResponse;
});

exports.authorUpdateGet = asyncHandler(async (req, res, next) => {
  const authorId = req.params.id;
  const author = await Author.queryByAuthorId(authorId);

  if (!author) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.redirect(`/catalog/author/${author.id}/update`);
});

exports.authorUpdatePost = [
  body("firstName")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified."),
  body("lastName")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Last Name must be specified."),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const authorId = req.params.id;

    let author = new Author({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: authorId,
    });

    let isErrorsExist = !errors.isEmpty();
    if (isErrorsExist) {
      res.render("authorForm", {
        title: "Update Author",
        author: author,
        errors: errors.array(),
      });
      return next(err);
    }

    await Author.updateByAuthorId(author, authorId);
    author = await Author.queryByAuthorId(authorId);

    const jsonResponse = res.json({
      updatedAuthor: author,
    });

    return jsonResponse;
  }),
];
