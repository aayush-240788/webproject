const path = require('path');
const express = require('express');
const app = express(); 
const hbs = require('hbs');

const templatePath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index", {
        name: 'agarwal'
    });
  });

  app.get("/about", (req, res) => {
    res.render("about", {
      name: req.query.name,
      sports: req.query.sports

    })
  });

  app.get("*", (req, res) => {
    res.render("404", {
      errorcomment: 'OOps'
    })
  });

app.listen(8000, () => {
    console.log("Listening");
});