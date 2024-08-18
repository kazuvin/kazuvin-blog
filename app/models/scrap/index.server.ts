import { client } from "~/lib/micro-cms";
import { ListResponse } from "~/types";

import { Scrap } from "./type";

export async function getScraps() {
  return client.get<ListResponse<Scrap>>({ endpoint: "scraps" });
}

export async function getScrap(slug: string) {
  return client.get<Scrap>({
    endpoint: "scraps",
    contentId: slug,
  });
}
