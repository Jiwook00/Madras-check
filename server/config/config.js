require("dotenv").config();
const username = process.env.username || "root";
const password = process.env.password;
const host = process.env.host || "127.0.0.1";

module.exports = {
  development: {
    username,
    password,
    database: "extension",
    host,
    dialect: "mysql",
  },
};
