import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/infrastructure/trpc";

let post = {
  id: 1,
  name: "Hello World",
};

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      post = { id: post.id + 1, name: input.name };
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return post;
  }),
});

/*
export class PostController extends TRPCController {
    @TRPCProcedure()
    async hello(input: z.infer<typeof z.object({ text: z.string() })>) {
      return {
        greeting: `Hello ${input.text}`,
      };
    }
  
    @TRPCProcedure()
    async create(input: z.infer<typeof z.object({ name: z.string().min(1) })>) {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      post = { id: post.id + 1, name: input.name };
      return post;
    }
  
    @TRPCProcedure()
    async getLatest() {
      return post;
    }
  }
*/
