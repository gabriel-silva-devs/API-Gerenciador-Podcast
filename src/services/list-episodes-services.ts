import { repositoryPodcast } from "../repository/podcast-respositories";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();
    
    return data; 
};