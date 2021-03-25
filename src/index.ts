import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return reply.send({ message: "Hi!" });
});

server.register(require("./routes/get.js"));

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
