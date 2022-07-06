const { notes } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: notes.creteNote,
  },
];

module.exports = routes;
