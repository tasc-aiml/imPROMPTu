import { db } from "$lib/db/db";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth();

  if (session?.user) {
    const team = await db.team.findFirst({
      where: {
        user: {
          some: {
            id: session.user.id,
          },
        },
      },
    });

    return {
      session,
      team,
    }
  } else {
    return {
      session,
    };
  }
};
