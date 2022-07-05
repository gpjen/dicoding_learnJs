const Hapi = require("@hapi/hapi");
const routes = require("./Routes/routes");

const init = async () => {
  const server = Hapi.server({
    port: 5001,
    host: "localhost",
  });

  // routes
  server.route(routes);

  await server.start();
  console.log(`server running on ${server.info.uri}`);
};

init();
