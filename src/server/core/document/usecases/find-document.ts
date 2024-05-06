import { DocumentNotFoundError } from "@/server/infrastructure/exceptions/document";
import type { FindDocumentPort } from "../port/input/find-document.port";
import type { DocumentRepositoryPort } from "../port/output/document-repository.port";

export class FindDocumentUseCase implements FindDocumentPort {
  constructor(private readonly documentRepository: DocumentRepositoryPort) {
    this.documentRepository = documentRepository;
  }

  async findById(id: string) {
    const result = this.documentRepository.findById(id);

    if (result === null) {
      throw new DocumentNotFoundError(id);
    }

    return result;
  }
}
