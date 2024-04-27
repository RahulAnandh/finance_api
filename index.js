var express = require("express");
const Sequelize = require("sequelize");
var jwt = require("jsonwebtoken");
var cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user_routes");
const userLoginROutes = require("./routes/user_login_routes");
const employeeRoutes = require("./routes/employee_routes");
const creditersRoutes = require("./routes/crediters_routes");
const debtersRoutes = require("./routes/debters_routes");
// const ensureToken = require("./util/ensureToken");

const {
  DATABASE_USER_NAME,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  API_PORT,
} = require("./constants");

const app = express();

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER_NAME,
  DATABASE_PASSWORD,
  {
    dialect: "postgres",
    port: DATABASE_PORT,
    host: DATABASE_HOST,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Conection Sussusfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};
app.listen(API_PORT, () => {
  console.log("PORT:", API_PORT);
});

app.use("/user", userLoginROutes);
app.use("/api/user", userRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/crediters", creditersRoutes);
app.use("/api/debters", debtersRoutes);

app.get("/api", ensureToken, (req, res) => {
  jwt.verify(req.token, "my_secret_key", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.send({
        text: "Protected Response",
        data: data,
      });
    }
  });
});
