import { t } from "$lib/trpc/trpc";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const router = t.router({
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
