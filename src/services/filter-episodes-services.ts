import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repository/podcast-respositories";

export const servicesFilterEpisodes = async (podecastName: String | null) => {
  const queryString = podecastName?.split("?p=")[1] || "";

  const data = await repositoryPodcast(queryString);
  return data;
};
