
var knex = require("knex")({
  client: "pg",
  connection: {
    host: '127.0.0.1',
    user: "postgres", // pkstudio1
    password: "welcome", //welcome
    database: "use_test", // pkstudio1
  },
  pool: { min: 2, max: 30 },
  acquireConnectionTimeout: 120000,
});

knex
  .raw("SELECT 1")
  .then((res) => {
    console.log("Database Connection Established..");
  })
  .catch((err) => {
    console.log(err.message);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
    if (err.code === "ER_BAD_DB_ERROR") {
      console.error("Database not found.");
    }
    if (
      err.code === "ER_DBACCESS_DENIED_ERROR" ||
      err.code === "ER_ACCESS_DENIED_ERROR"
    ) {
      console.error("Access denied for user to database.");
    }
  });

module.exports = knex;
