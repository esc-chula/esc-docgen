import type { DocumentData } from "../../domain/document.model";

export interface FindDocumentPort {
  findById(id: string): Promise<DocumentData | null>;
}
