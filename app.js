const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = [];

app.get("/", (req, res) => {
  res.render("dashboard", { tasks });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  const id = Math.floor(Math.random() * 1000);
  tasks.push({
    title: task,
    id: id,
  });
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((post) => post.id == id);
  tasks.splice(index, 1);
  return res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}.`);
});
