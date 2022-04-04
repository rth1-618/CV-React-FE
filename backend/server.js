const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const achRoutes = require("./routes/achRoutes");
const achievements = require("./data/achievements");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
const app = express();
connectDB();
app.use(express.json()); // imp!

app.use("/api/users", userRoutes); //you had forgotten the forward slash here!!!!! -_-
app.use("/api/achs", achRoutes);
app.get("/", (req, res) => {
  res.send("GET API is running...");
});

// fetch all
// app.get("/api/achs", (req, res) => {
//   res.json(achievements);
// });

/*
// fetch by id
app.get("/api/achs/:id", (req, res) => {
  //   console.log(req.params);
  const achievement = achievements.find(
    (ach) => ach._id.toString() === req.params.id
  );
  res.send(achievement);
});
*/

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
