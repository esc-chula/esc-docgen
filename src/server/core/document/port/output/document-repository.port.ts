import type { DocumentData } from "../../domain/document.model";

export interface DocumentRepositoryPort {
  createDocument(data: DocumentData): Promise<DocumentData>;
  updateDocument(id: string, data: DocumentData): Promise<DocumentData>;
  deleteDocument(id: string): Promise<void>;

  findById(id: string): Promise<DocumentData | null>;
  getDocuments(): Promise<DocumentData[]>;
}
