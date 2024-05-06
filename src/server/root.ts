import { postRouter } from "@/server/adapter/input/post.controller";
import { createTRPCRouter } from "@/server/infrastructure/trpc";
import { documentRouter } from "./adapter/input/document.controller";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  document: documentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
