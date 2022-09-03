import { Users } from "./mongodb";

export const getAllUsers = async () => {
  const users = await (await Users()).find({}).toArray();
  return users;
};

export const createUser = async (newUser) => {
  const user = await (await Users()).insert(newUser);
  return user;
};
