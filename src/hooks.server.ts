import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { createTRPCHandle } from "trpc-sveltekit";
import { handle as authHandle } from "$lib/auth/auth";

export const trpcHandle: Handle = createTRPCHandle({
  router,
  createContext,
  onError: ({ type, path, error }) =>
    console.error(
      `Encountered error while trying to process ${type} @ ${path}:`,
      error,
    ),
});

export const handle = sequence(authHandle, trpcHandle);
