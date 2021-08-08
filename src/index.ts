import fastify from "fastify";
import { readdirSync } from "fs";

const server = fastify({
  ignoreTrailingSlash: true,
});

server.get("/", async (request, reply) => {
  return "pong\n";
});

const routes = readdirSync(__dirname + "/routes");
routes.forEach(async (routeFileName) => {
  const routeFile = await import(`${__dirname}/routes/${routeFileName}`);
  const route = routeFile.route;
  server.route(route);
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
