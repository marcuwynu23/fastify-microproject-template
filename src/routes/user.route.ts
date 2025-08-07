import {FastifyInstance} from "fastify";
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetUser,
  handleGetUsers,
  handleUpdateUser,
} from "@/controllers/user.controller";

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/", handleGetUsers);
  fastify.get("/:id", handleGetUser);
  fastify.post("/", handleCreateUser);
  fastify.put("/:id", handleUpdateUser);
  fastify.delete("/:id", handleDeleteUser);
}
