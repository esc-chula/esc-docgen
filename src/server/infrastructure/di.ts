import { container } from "tsyringe";

import { FindDocumentUseCase } from "../core/document/usecases/find-document";
import { DocumentRepository } from "../adapter/output/document.repository";

container.registerSingleton("FindDocumentUseCase", FindDocumentUseCase);
container.registerSingleton("DocumentRepository", DocumentRepository);
