import Fastify, { FastifyInstance } from "fastify";
import process from "process";
import route from "./routes/route";
const fastify: FastifyInstance = Fastify({ logger: true });

fastify.register(route);
// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
    console.log("Server running at http://localhost:4000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
