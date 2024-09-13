import type { RequestEvent } from "@sveltejs/kit";

export async function getServerSession(event: RequestEvent) {
  return await event.locals.auth();
}
