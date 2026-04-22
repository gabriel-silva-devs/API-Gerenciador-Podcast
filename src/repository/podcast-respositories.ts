import * as fileSystem from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model"
import { json } from "stream/consumers";

const pathData = path.join(__dirname,"../repository/podcasts.json");//Pegar dinamicamente

export const repositoryPodcast = async (podcastName?:String): Promise<PodcastModel[]> => {
    
    const rawData = fileSystem.readFileSync(pathData,"utf8");
    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter(
        (podcast: PodcastModel) => podcast.podcastName === podcastName
    )};

    return jsonFile;
};