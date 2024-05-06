import { createTRPCRouter } from "@/server/infrastructure/trpc";
import { postRouter } from "@/server/infrastructure/ui/routers/post.router";
import { documentRouter } from "@/server/infrastructure/ui/routers/document.router";

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
