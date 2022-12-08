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

//get req to get movies from db
router.get("/movies/new", (req, res, next) => {
  CelebrityModel.find()
    .then((celebrities) => {
      res.render("movies/createmovie.hbs", { celebrities });
    })
    .catch((err) => {
      console.log("Celebrities fetch failed", err);
    });
});

//make new movie
router.post("/movies/new", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  MovieModel.create({ title, genre, plot, cast })
    .then((movie) => {
      res.redirect("/movies");
      console.log("Movie createx", res);
    })
    .catch((err) => {
      console.log("Movie create failed", err);
    });
});

//detail page
router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;
  console.log("errrrrrrrrrrrr" + id);
  MovieModel.findById(id)
    .then((movie) => {
      res.render("movies/show.hbs", { movie });
      console.log("Movie fetched", res);
    })
    .catch((err) => {
      console.log("Movie fetch failed", err);
    });
});

//updating
router.get("/movie/:id/edit", (req, res, next) => {
  const { id } = req.params;
  MovieModel.findById(id)
    .then((movie) => {
      res.render("movies/update.hbs", { movie });
    })
    .catch((err) => {
      console.log("movie edit failed", err);
    });
});

router.post("/movie/:id/edit", (req, res, next) => {
  const { tile, genre, plot, cast } = req.body;
  const { id } = req.params;
  MovieModel.findByIdAndUpdate(id, { tile, genre, plot, cast })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("movie update failed", err);
    });
});

//delete request

router.post("/movie/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  MovieModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("movie Delete failed", err);
    });
});
module.exports = router;
