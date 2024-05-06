import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/infrastructure/trpc";
import type { FindDocumentPort } from "@/server/core/document/port/input/find-document.port";
import { FindDocumentUseCase } from "@/server/core/document/usecases/find-document";
import { DocumentRepository } from "../output/document.repository";
import type { TRPCController } from "@/server/infrastructure/trpc/controller.interface";

export class DocumentController implements TRPCController {
  documentFind: FindDocumentPort;

  constructor(documentFind: FindDocumentPort) {
    this.documentFind = documentFind;
  }

  async getDocument(id: string) {
    return this.documentFind.findById(id);
  }

  router() {
    return createTRPCRouter({
      getDocument: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ input }) => {
          return this.getDocument(input.id);
        }),
    });
  }
}

const documentRepository = new DocumentRepository();
const findDocumentUseCase = new FindDocumentUseCase(documentRepository);
const documentController = new DocumentController(findDocumentUseCase);

export const documentRouter = documentController.router();
