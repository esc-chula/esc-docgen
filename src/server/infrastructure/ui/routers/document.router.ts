import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/infrastructure/trpc";
import { documentController } from "../../di";

export const documentRouter = createTRPCRouter({
  getDocument: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return documentController.getDocument(input.id);
    }),
});
