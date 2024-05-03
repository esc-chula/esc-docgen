"use client";
import useSWR, { type SWRResponse } from "swr";
import type { DocumentData } from "@/components/document";

export function useDocumentData(
  fileName: string,
): SWRResponse<DocumentData, Error> {
  const result = useSWR<DocumentData>(
    `/api/document/${fileName}`,
    async (url: string) => {
      const rawData = await fetch(url).then((res) => res.text());
      const parsedData = JSON.parse(rawData);

      // TODO: validate object schema with zod
      console.log(parsedData);

      return parsedData;
    },
    { revalidateOnFocus: false },
  );

  return result;
}
