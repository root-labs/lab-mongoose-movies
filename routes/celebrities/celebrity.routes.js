const CelebrityModel = require("../../models/Celebrity.model");

const router = require("express").Router();

/* GET celebrity page page */
router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
    .then((celebrities) => {
      res.render("celebrities/index.hbs", { celebrities });
    })
    .catch((err) => {
      console.log("Celebrities fetch failed", err);
    });
});

//get celebrity detail page
router.get("/celebrities/:id", (req, res, next) => {
  const { id } = req.params;
  CelebrityModel.findById(id)
    .then((celeb) => {
      res.render("celebrities/show.hbs", { celeb });
      console.log("Celebrity fetched", res);
    })
    .catch((err) => {
      console.log("Celebrity fetch failed", err);
    });
});

router.get("/celebrities/create", (req, res, next) => {
  CelebrityModel.create()
    .then((celebrities) => {
      res.render("celebrities/new.hbs");
      console.log("Celebrity fetched", res);
    })
    .catch((err) => {
      console.log("Celebrity create failed", err);
    });
});

router.post("/celebrities/create", (req, res, next) => {
  // Iteration #3: Add a new drone

  // ... your code here
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("celebrities/index.hbs");
    })
    .catch((err) => {
      console.log("celebrities creating failed", err);
    });
});

module.exports = router;
