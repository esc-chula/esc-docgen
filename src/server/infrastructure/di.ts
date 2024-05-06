import "reflect-metadata";

import { container } from "tsyringe";

import { FindDocumentUseCase } from "../core/document/usecases/find-document";
import { DocumentRepository } from "../adapter/output/document.repository";
import { DocumentController } from "../adapter/input/document.controller";

container.registerSingleton("FindDocumentUseCase", FindDocumentUseCase);
container.registerSingleton("DocumentRepository", DocumentRepository);

container.register("FindDocumentPort", { useToken: "FindDocumentUseCase" });
container.register("DocumentRepositoryPort", {
  useToken: "DocumentRepository",
});

container.registerSingleton("DocumentController", DocumentController);

export const documentController = container.resolve(DocumentController);
