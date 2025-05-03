import Fastify, { FastifyInstance } from "fastify";
import process from "process";
import fs from "fs";
import route from "./routes/route";

// Create a log stream for the file
const logFileStream = fs.createWriteStream("./logs/app.log", { flags: "a" });

// Create the Fastify instance with custom logger configuration
const fastify: FastifyInstance = Fastify({
  logger: {
    level: "debug",
    stream: logFileStream,
    safe: true,
  },
});

// Register the routes
fastify.register(route);

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
    fastify.log.info("Server running at http://localhost:4000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
