import { db } from "$lib/db/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth();

  if (session?.user) {
    const story = await db.story.findFirst({
      where: {
        team: {
            some: {
                user: { some: { id: session.user.id } }
            }
        }
      }
    });

    return {
      story,
    }
  } else {
    return null;
  }
};
