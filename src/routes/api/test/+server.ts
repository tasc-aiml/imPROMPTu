import { getSession } from "$lib/auth/sessions";

export const GET = async (event) => {
  const session = await getSession(event);
  console.log(session);

  if (session) {
    return new Response(JSON.stringify({ message: "Hello, " }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ message: "Hello, Error" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
};
