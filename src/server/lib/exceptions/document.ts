export class DocumentNotFoundError extends Error {
  constructor(documentId: string) {
    super(`Document with id ${documentId} not found`);
    this.name = "DocumentNotFoundError";
  }
}
