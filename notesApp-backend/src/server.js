const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.Server({
    port: "3000",
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`server runing on ${server.info.uri}`);
};

init();
