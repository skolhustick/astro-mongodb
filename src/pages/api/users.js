import { createUser, getAllUsers } from "../../lib/users";

export const get = async () => {
  const users = await getAllUsers();
  if (!users) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  return new Response(JSON.stringify(users), {
    status: 200,
  });
};

export const post = async ({ request }) => {
  const newUser = await request.json();
  const user = await createUser(newUser);
  return new Response(JSON.stringify(user), {
    status: 200,
  });
};
