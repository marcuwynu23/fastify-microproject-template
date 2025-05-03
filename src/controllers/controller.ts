import { FastifyRequest, FastifyReply } from "fastify";
import { getGreetingMessage } from "../services/service";

// Controller function for handling the GET request
export const getGreeting = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const message = await getGreetingMessage();
    reply.send({ message });
  } catch (error) {
    reply.status(500).send({ error: "Internal Server Error" });
  }
};

export const getPostGreeting = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const message = "Post Message";
    reply.send({ message });
  } catch (error) {
    reply.status(500).send({ error: "Internal Server Error" });
  }
};
