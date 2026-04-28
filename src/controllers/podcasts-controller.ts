import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services";
import { servicesFilterEpisodes } from "../services/filter-episodes-services";
import { StatusCode } from "../utils/status-code";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceListEpisodes();

  res.writeHead(StatusCode.OK, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await servicesFilterEpisodes(req.url);

  res.writeHead(StatusCode.OK, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
