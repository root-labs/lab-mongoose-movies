const MovieModel = require("../../models/Movie.model");
const CelebrityModel = require("../../models/Celebrity.model");

const router = require("express").Router();
router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      res.render("movies/index.hbs", { movies });
    })
    .catch((err) => {
      console.log("Celebrities fetch failed", err);
    });
});

router.get("/movies/new", (req, res, next) => {
  CelebrityModel.find()
    .then((celebrities) => {
      res.render("movies/createmovie.hbs", { celebrities });
    })
    .catch((err) => {
      console.log("Celebrities fetch failed", err);
    });
});

router.post("/movies/new", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  MovieModel.create({ title, genre, plot, cast })
    .then((movie) => {
      res.render("movies/index.hbs");
      console.log("Movie createx", res);
    })
    .catch((err) => {
      console.log("Movie create failed", err);
    });
});

module.exports = router;
