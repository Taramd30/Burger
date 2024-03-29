var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgObject = {
      burgers: data
    };
    console.log(burgObject);
    res.render("index", burgObject);
  });
});

router.post("/", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function() {
      res.redirect("/");
    }
  );
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function() {
      res.redirect("/");
    }
  );
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
