import {FastifyRequest, FastifyReply} from "fastify";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "@/services/user.service";

export const handleGetUsers = async (
  _req: FastifyRequest,
  reply: FastifyReply
) => {
  const users = await getUsers();
  reply.send(users);
};

export const handleGetUser = async (
  req: FastifyRequest<{Params: {id: string}}>,
  reply: FastifyReply
) => {
  const user = await getUserById(req.params.id);
  if (!user) return reply.status(404).send({message: "User not found"});
  reply.send(user);
};

export const handleCreateUser = async (
  req: FastifyRequest<{
    Body: {name: string; email: string; username: string; password: string};
  }>,
  reply: FastifyReply
) => {
  const {name, email, username, password} = req.body;
  const user = await createUser(name, email, username, password);
  reply.code(201).send(user);
};

export const handleUpdateUser = async (
  req: FastifyRequest<{
    Params: {id: string};
    Body: {name?: string; email?: string};
  }>,
  reply: FastifyReply
) => {
  const user = await updateUser(req.params.id, req.body);
  reply.send(user);
};

export const handleDeleteUser = async (
  req: FastifyRequest<{Params: {id: string}}>,
  reply: FastifyReply
) => {
  await deleteUser(req.params.id);
  reply.code(204).send();
};
