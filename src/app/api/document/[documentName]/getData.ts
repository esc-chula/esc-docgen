import toml from "toml";
import type { DocumentData } from "../../../document/utils/types";
import * as fs from "fs/promises";
import path from "path";

export async function getDataFromToml(fileName: string): Promise<DocumentData> {
  // use fs to read the toml file
  const rawData = await fs.readFile(
    path.join(process.cwd(), "src/data", `${fileName}.toml`),
    "utf-8",
  );

  const data = toml.parse(rawData) as DocumentData;

  return data;
}
