import {IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episodes-services"
import { servicesFilterEpisodes } from "../services/filter-episodes-services";

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
)  => {
    
    const content = await serviceListEpisodes();
    
    res.writeHead(200, {"content-type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
};

export const getFileEpisodies = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content = await servicesFilterEpisodes("Gabriel Silva")

    res.writeHead(200 , {"content-type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
}