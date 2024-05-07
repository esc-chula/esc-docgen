import {
  type DocumentRepositoryPort,
  type DocumentData,
  DocumentDataModel,
} from "@/server/core/document";
import { parseToml } from "@/utils/toml";
import { readFile } from "fs/promises";
import path from "path";
export class DocumentRepository implements DocumentRepositoryPort {
  async findById(id: string): Promise<DocumentData | null> {
    try {
      const filePath = path.join(process.cwd(), "src/data", `${id}.toml`);
      const rawToml = await readFile(filePath, "utf-8");
      console.log("res => ", parseToml(rawToml));
      const data = DocumentDataModel.parse(parseToml(rawToml));

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createDocument(data: DocumentData): Promise<DocumentData> {
    throw new Error("Method not implemented.");
  }

  async deleteDocument(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getDocuments(): Promise<DocumentData[]> {
    throw new Error("Method not implemented.");
  }

  async updateDocument(id: string, data: DocumentData): Promise<DocumentData> {
    throw new Error("Method not implemented.");
  }
}
