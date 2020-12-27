var express = require("express");
var router = express.Router();
var Doctor = require("../models/doctors");

router.get("/available/:day", function (req, res, next) {
  console.log(req.params)
  Doctor.find({ availability: req.params.day })
    .then(
      (doctors) => {
        console.log("These doctors are available: ", doctors);
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.json(doctors);
      },
      (error) => next(error)
    )
    .catch((err) => next(err));
});

module.exports = router;
