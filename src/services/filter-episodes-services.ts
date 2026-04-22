import { repositoryPodcast } from "../repository/podcast-respositories"

export const servicesFilterEpisodes = async (podecastName:String) => {
    
    const data = await repositoryPodcast(podecastName);
    return data;
}