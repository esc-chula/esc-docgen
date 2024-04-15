import { getDataFromToml } from "./getData";

function getDocumentNameFromRequest(url: string): string {
  const params =
    new URL(url).pathname.split("?")[0]?.split("/").filter(Boolean) ?? [];
  return params[params.length - 1] ?? "";
}

export async function GET(req: Request): Promise<Response> {
  const documentName = getDocumentNameFromRequest(req.url);
  const data = await getDataFromToml(documentName);

  return Response.json(data);
}
