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

router.get("/celebrity/:id", (req, res, next) => {
  const { id } = req.params;
  console.log("errrrrrrrrrrrr" + id);
  CelebrityModel.findById(id.trim())
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
  const { name, occupation, catchPhrase } = req.body;
  CelebrityModel.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("celebrities creating failed", err);
    });
});

router.get("/celeb/:id/edit", (req, res, next) => {
  const { id } = req.params;
  CelebrityModel.findById(id)
    .then((celeb) => {
      res.render("celebrities/update.hbs", { celeb });
    })
    .catch((err) => {
      console.log("celebrities edit failed", err);
    });
});

router.post("/celeb/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const { id } = req.params;
  CelebrityModel.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("celebrities update failed", err);
    });
});

router.post("/celeb/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  CelebrityModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("celebrities Delete failed", err);
    });
});
module.exports = router;
