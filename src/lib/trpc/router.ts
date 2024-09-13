import { t } from "$lib/trpc/trpc";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { storyRouter } from "./routers/story";
import { submissionRouter } from "./routers/submissions";

export const router = t.router({
    storyRouter,
    submissionRouter
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<Router>;
export type RouterOutputs = inferRouterOutputs<Router>;
