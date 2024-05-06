import type { FindDocumentPort } from "@/server/core/document/port/input/find-document.port";

import { inject, injectable } from "tsyringe";

@injectable()
export class DocumentController {
  constructor(
    @inject("FindDocumentPort") private readonly documentFind: FindDocumentPort,
  ) {
    this.documentFind = documentFind;
  }

  async getDocument(id: string) {
    return this.documentFind.findById(id);
  }
}
