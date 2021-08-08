import { RouteOptions } from "fastify";
export const route: RouteOptions = {
  method: "GET",
  url: "/info",
  handler: (request, reply) => {
    reply.code(200);
    reply.send("Pastel Global Ban List");
  },
};
