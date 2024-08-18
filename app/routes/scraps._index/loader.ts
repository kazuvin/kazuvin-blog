import { defer } from "@remix-run/node";

import { getScraps } from "~/models/scrap/index.server";

export const scrapsLoader = async () => {
  return defer({ scrapsPromise: getScraps() });
};
