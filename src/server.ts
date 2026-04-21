import * as http from "http";

const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
    }
);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`O servidor está conectado na porta: ${port}`);
});