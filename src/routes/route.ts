import { FastifyInstance } from "fastify";
import { getGreeting, getPostGreeting } from "../controllers/controller";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", getGreeting);
  fastify.post("/", getPostGreeting);
};
