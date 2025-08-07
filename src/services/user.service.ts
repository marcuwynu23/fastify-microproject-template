import {prisma} from "@/prisma/prisma";

export const createUser = async (
  name: string,
  email: string,
  username: string,
  password: string
) => {
  return await prisma.user.create({
    data: {name, email, username, password},
  });
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({where: {id}});
};

export const updateUser = async (
  id: string,
  data: {name?: string; email?: string}
) => {
  return await prisma.user.update({where: {id}, data});
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({where: {id}});
};
