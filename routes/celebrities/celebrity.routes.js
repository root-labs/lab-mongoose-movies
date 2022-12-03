const CelebrityModel = require("../../models/Celebrity.model");

const router = require("express").Router();

/* GET home page */
router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find().then((celebrities) => {
    res.render("/celebrities/index.hbs", { celebrities }).catch((err) => {
      console.log("Celebrities fetch failed", err);
    });
  });
});

module.exports = router;
