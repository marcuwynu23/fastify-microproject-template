import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import process from "process";

const fastify: FastifyInstance = Fastify({ logger: true });

// Define a route
fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  return { message: "Hello from Fastify with TypeScript!" };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server running at http://localhost:4000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
